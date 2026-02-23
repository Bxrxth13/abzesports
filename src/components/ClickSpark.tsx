import React, { useEffect, useRef, useCallback } from 'react';

interface Spark {
    id: number;
    x: number;
    y: number;
    angle: number;
    startTime: number;
}

interface ClickSparkProps {
    sparkColor?: string;
    sparkSize?: number;
    sparkRadius?: number;
    sparkCount?: number;
    duration?: number;
    easing?: string;
    extraScale?: number;
}

const ClickSpark: React.FC<ClickSparkProps> = ({
    sparkColor = '#ff0000',
    sparkSize = 6,
    sparkRadius = 8,
    sparkCount = 4,
    duration = 200,
    easing = 'ease-out',
    extraScale = 1,
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const sparksRef = useRef<Spark[]>([]);
    const animationFrameRef = useRef<number>();
    const sparkIdRef = useRef(0);

    const createSparks = useCallback((x: number, y: number) => {
        const newSparks: Spark[] = [];
        const startTime = Date.now();

        for (let i = 0; i < sparkCount; i++) {
            const angle = (360 / sparkCount) * i + Math.random() * 30 - 15;
            newSparks.push({
                id: sparkIdRef.current++,
                x,
                y,
                angle,
                startTime,
            });
        }

        sparksRef.current = [...sparksRef.current, ...newSparks];
    }, [sparkCount]);

    const handleClick = useCallback((e: MouseEvent) => {
        createSparks(e.clientX, e.clientY);
    }, [createSparks]);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Create canvas for rendering sparks
        const canvas = document.createElement('canvas');
        canvas.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      pointer-events: none;
      z-index: 99999;
    `;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        container.appendChild(canvas);

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Handle resize
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const now = Date.now();

            sparksRef.current = sparksRef.current.filter((spark) => {
                const elapsed = now - spark.startTime;
                const progress = Math.min(elapsed / duration, 1);

                if (progress >= 1) return false;

                // Easing function
                let easedProgress: number;
                if (easing === 'ease-out') {
                    easedProgress = 1 - Math.pow(1 - progress, 3);
                } else if (easing === 'ease-in-out') {
                    easedProgress = progress < 0.5
                        ? 4 * progress * progress * progress
                        : 1 - Math.pow(-2 * progress + 2, 3) / 2;
                } else {
                    easedProgress = progress;
                }

                const distance = sparkRadius * easedProgress * extraScale * 3;
                const angleRad = (spark.angle * Math.PI) / 180;
                const sparkX = spark.x + Math.cos(angleRad) * distance;
                const sparkY = spark.y + Math.sin(angleRad) * distance;

                // Draw spark
                const opacity = 1 - progress;
                const size = sparkSize * (1 - progress * 0.5);

                ctx.save();
                ctx.globalAlpha = opacity;
                ctx.fillStyle = sparkColor;
                ctx.shadowColor = sparkColor;
                ctx.shadowBlur = 10;

                // Draw a small circle/spark
                ctx.beginPath();
                ctx.arc(sparkX, sparkY, size / 2, 0, Math.PI * 2);
                ctx.fill();

                // Draw a line tail
                const tailLength = size * 1.5;
                const tailX = sparkX - Math.cos(angleRad) * tailLength;
                const tailY = sparkY - Math.sin(angleRad) * tailLength;

                ctx.beginPath();
                ctx.strokeStyle = sparkColor;
                ctx.lineWidth = size / 3;
                ctx.lineCap = 'round';
                ctx.moveTo(tailX, tailY);
                ctx.lineTo(sparkX, sparkY);
                ctx.stroke();

                ctx.restore();

                return true;
            });

            animationFrameRef.current = requestAnimationFrame(animate);
        };

        animate();

        // Global click listener
        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
            window.removeEventListener('resize', handleResize);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
            if (canvas.parentNode) {
                canvas.parentNode.removeChild(canvas);
            }
        };
    }, [sparkColor, sparkSize, sparkRadius, duration, easing, extraScale, handleClick]);

    return <div ref={containerRef} />;
};

export default ClickSpark;

import React, { useEffect, useRef } from 'react';

const BackgroundCanvas = ({ isLightMode }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particlesArray = [];
    let pulsesArray = [];

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let mouse = {
      x: null,
      y: null,
      radius: 120
    };

    const handleMouseMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    // Particle (Neuron) Class
    class Particle {
      constructor(x, y, dx, dy, size) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.size = size;
        this.baseDx = dx;
        this.baseDy = dy;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = isLightMode ? 'rgba(99, 102, 241, 0.8)' : 'rgba(168, 85, 247, 0.8)';
        ctx.fill();
      }
      update() {
        if (this.x > canvas.width || this.x < 0) {
          this.dx = -this.dx;
          this.baseDx = -this.baseDx;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.dy = -this.dy;
          this.baseDy = -this.baseDy;
        }

        // Gentle mouse repulsion
        if (mouse.x != null) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distanceSq = dx * dx + dy * dy;
          if (distanceSq < mouse.radius * mouse.radius) {
            let distance = Math.sqrt(distanceSq);
            const force = (mouse.radius - distance) / mouse.radius;
            this.x -= (dx / distance) * force * 1.5;
            this.y -= (dy / distance) * force * 1.5;
          }
        }

        this.x += this.dx;
        this.y += this.dy;
        this.draw();
      }
    }

    // Pulse (Data flow between neurons) Class
    class Pulse {
      constructor(startX, startY, endX, endY, distanceSq) {
        this.startX = startX;
        this.startY = startY;
        this.endX = endX;
        this.endY = endY;
        this.x = startX;
        this.y = startY;
        this.progress = 0;
        this.active = true;
        this.speed = 3.0 / Math.sqrt(distanceSq); // Normalize speed based on length
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2, false);
        ctx.fillStyle = isLightMode ? '#3b82f6' : '#2dd4bf'; // Bright blue for light, teal for dark
        ctx.shadowBlur = 8;
        ctx.shadowColor = ctx.fillStyle;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
      update() {
        this.progress += this.speed;
        if (this.progress >= 1) {
          this.active = false;
        } else {
          this.x = this.startX + (this.endX - this.startX) * this.progress;
          this.y = this.startY + (this.endY - this.startY) * this.progress;
          this.draw();
        }
      }
    }

    function init() {
      particlesArray = [];
      pulsesArray = [];
      let numberOfParticles = (canvas.height * canvas.width) / 10000;
      for (let i = 0; i < numberOfParticles; i++) {
        let size = Math.random() * 2 + 1.5;
        let x = Math.random() * (canvas.width - size * 2) + size;
        let y = Math.random() * (canvas.height - size * 2) + size;
        let dx = (Math.random() - 0.5) * 1.0;
        let dy = (Math.random() - 0.5) * 1.0;
        particlesArray.push(new Particle(x, y, dx, dy, size));
      }
    }

    function connectAndPulse() {
      let maxDistanceSq = 25000; // max distance for connections squared

      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a + 1; b < particlesArray.length; b++) {
          let p1 = particlesArray[a];
          let p2 = particlesArray[b];
          let dx = p1.x - p2.x;
          let dy = p1.y - p2.y;
          let distanceSq = dx * dx + dy * dy;

          if (distanceSq < maxDistanceSq) {
            let opacity = 1 - (distanceSq / maxDistanceSq);
            let r = isLightMode ? 99 : 168;
            let g = isLightMode ? 102 : 85;
            let b_col = isLightMode ? 241 : 247;

            ctx.strokeStyle = `rgba(${r}, ${g}, ${b_col}, ${opacity * 0.4})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();

            // Spawn pulses randomly between connected nodes
            if (Math.random() < 0.001) {
              pulsesArray.push(new Pulse(p1.x, p1.y, p2.x, p2.y, distanceSq));
            }
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }

      connectAndPulse();

      // Update pulses and remove inactive ones
      for (let i = pulsesArray.length - 1; i >= 0; i--) {
        pulsesArray[i].update();
        if (!pulsesArray[i].active) {
          pulsesArray.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    }

    init();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, [isLightMode]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none'
      }}
    />
  );
};

export default BackgroundCanvas;

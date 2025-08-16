import React, { useEffect, useState } from 'react';



const InteractiveMap: React.FC = () => {
  const [hoveredProvince, setHoveredProvince] = useState<string | null>(null);

  const handleProvinceClick = (provinceName: string) => {
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(provinceName + ' Algeria')}`;
    window.open(searchUrl, '_blank', 'noopener,noreferrer');
  };


  useEffect(() => {
    // Load SVG paths (58 wilayas) from public/placeholder.svg
    async function loadMap() {
      try {
        const res = await fetch('/placeholder.svg');
        const text = await res.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'image/svg+xml');
        const features = doc.querySelector('#features');
        const group = document.querySelector('#features');
        if (!features || !group) return;

        // Inject all path nodes
        (group as SVGGElement).innerHTML = features.innerHTML;

        // Enhance interactivity and accessibility
        const paths = (group as SVGGElement).querySelectorAll('path');
        paths.forEach((p) => {
          const name = p.getAttribute('name') || p.getAttribute('data-name') || (p.id || 'Province');
          p.setAttribute('tabindex', '0');
          p.setAttribute('role', 'button');
          p.setAttribute('aria-label', `${name} province - click to search`);
          (p as SVGElement).style.cursor = 'pointer';
          (p as SVGElement).style.transition = 'all 0.3s ease';

          const onEnter = () => {
            (p as SVGElement).style.fill = 'hsl(var(--map-hover))';
            (p as SVGElement).style.transform = 'scale(1.02)';
            setHoveredProvince(name);
          };
          const onLeave = () => {
            (p as SVGElement).style.fill = 'hsl(var(--map-fill))';
            (p as SVGElement).style.transform = 'scale(1)';
            setHoveredProvince(null);
          };
          const onClick = () => handleProvinceClick(name);
          const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onClick();
            }
          };

          p.addEventListener('mouseenter', onEnter);
          p.addEventListener('mouseleave', onLeave);
          p.addEventListener('click', onClick);
          p.addEventListener('keydown', onKeyDown as any);

          // Store listeners for cleanup
          (p as any)._listeners = { onEnter, onLeave, onClick, onKeyDown };
        });
      } catch (e) {
        console.error('Failed to load Algeria SVG', e);
      }
    }
    loadMap();

    return () => {
      const group = document.querySelector('#features');
      if (!group) return;
      const paths = group.querySelectorAll('path');
      paths.forEach((p) => {
        const l = (p as any)._listeners;
        if (l) {
          p.removeEventListener('mouseenter', l.onEnter);
          p.removeEventListener('mouseleave', l.onLeave);
          p.removeEventListener('click', l.onClick);
          p.removeEventListener('keydown', l.onKeyDown);
        }
      });
      (group as SVGGElement).innerHTML = '';
    };
  }, []);

  return (
    <div className="w-full p-4">
      <div className="relative bg-card rounded-xl shadow-algeria-green border border-border overflow-hidden">
        <div className="heritage-pattern p-4 md:p-6">
          {hoveredProvince && (
            <div className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground px-3 py-2 rounded-md shadow-lg font-medium">
              {hoveredProvince}
            </div>
          )}
          
          <div className="w-full flex justify-center">
            <div className="w-full max-w-2xl md:max-w-3xl lg:max-w-4xl">
              <svg 
                baseProfile="tiny"
                fill="hsl(var(--map-fill))"
                stroke="hsl(var(--map-stroke))"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0.5}
                viewBox="0 0 1000 1000"
                width="100%"
                height="auto"
                style={{ maxHeight: '70vh', minHeight: 300 }}
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Interactive map of Algeria with 58 provinces"
                preserveAspectRatio="xMidYMid meet"
              >
                <title>Interactive Map of Algeria</title>
                <desc>Click on any province to learn more about it</desc>
                <g id="features" />
              </svg>
            </div>
          </div>
          
          
          <div className="mt-4 text-center">
            <p className="text-sm text-muted-foreground">
              Click on any province to explore more information
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;
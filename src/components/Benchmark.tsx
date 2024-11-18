import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, Tooltip } from 'recharts';
import { Star, Award, Zap } from 'lucide-react';


type TooltipProps = {
    active?: boolean;
    payload?: { name: string; value: number; color: string }[];
    label?: string;
  };

export const EnhancedBenchmarkVisualization = () => {
  const data = [
    {
      category: '3D Rendering',
      'Solución Propuesta': 100,
      'Onirix Studio': 80,
      'Barcelona Culinary Hub': 60,
      description: 'Calidad visual y rendimiento',
      features: 'WebGL + Three.js + Babylon.js'
    },
    {
      category: 'Interactividad',
      'Solución Propuesta': 95,
      'Onirix Studio': 75,
      'Barcelona Culinary Hub': 50,
      description: 'Personalización en tiempo real',
      features: 'Rotación 360° + Zoom + AR'
    },
    {
      category: 'Performance',
      'Solución Propuesta': 90,
      'Onirix Studio': 75,
      'Barcelona Culinary Hub': 45,
      description: 'Rendimiento multiplataforma',
      features: '60+ FPS Adaptativo'
    },
    {
      category: 'Realismo 3D',
      'Solución Propuesta': 95,
      'Onirix Studio': 65,
      'Barcelona Culinary Hub': 40,
      description: 'Calidad visual y texturas',
      features: 'PBR + Iluminación Avanzada'
    },
    {
      category: 'Personalización',
      'Solución Propuesta': 100,
      'Onirix Studio': 70,
      'Barcelona Culinary Hub': 55,
      description: 'Opciones de modificación',
      features: 'Ingredientes + Porciones + AR'
    }
  ];

  const CustomTooltip: React.FC<TooltipProps> = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const categoryData = data.find(item => item.category === label);
      return (
        <div className="bg-white p-4 shadow-lg rounded-lg border border-gray-200">
          <h3 className="font-bold text-gray-800">{label}</h3>
          {categoryData ? (
          <>
            <p className="text-sm text-gray-600">{categoryData.description}</p>
            <div className="mt-2 pt-2 border-t">
              <p className="text-xs font-semibold text-blue-600">Características:</p>
              <p className="text-sm">{categoryData.features}</p>
            </div>
          </>
        ) : (
          <p className="text-sm text-gray-500">No hay datos disponibles para esta categoría.</p>
        )}
        <div className="mt-2 space-y-1">
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.color }} className="font-semibold">
              {entry.name}: {entry.value}%
            </p>
          ))}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Benchmark de Menús Virtuales 3D</h2>
        <p className="text-gray-600">Comparativa de Tecnologías y Capacidades 3D</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RadarChart 
            width={600} 
            height={400} 
            data={data} 
            className="mx-auto"
          >
            <PolarGrid strokeDasharray="3 3" />
            <PolarAngleAxis 
              dataKey="category" 
              tick={{ fill: '#1f2937', fontSize: 12, fontWeight: 500 }}
            />
            <PolarRadiusAxis 
              angle={30} 
              domain={[0, 100]} 
              tick={{ fill: '#4b5563' }}
            />
            
            <Radar
              name="Solución Propuesta"
              dataKey="Solución Propuesta"
              stroke="#3b82f6"
              fill="#3b82f6"
              fillOpacity={0.3}
            />
            <Radar
              name="Onirix Studio"
              dataKey="Onirix Studio"
              stroke="#10b981"
              fill="#10b981"
              fillOpacity={0.3}
            />
            <Radar
              name="Barcelona Culinary Hub"
              dataKey="Barcelona Culinary Hub"
              stroke="#f59e0b"
              fill="#f59e0b"
              fillOpacity={0.3}
            />
            
            <Legend />
            <Tooltip content={<CustomTooltip/>} />
          </RadarChart>
        </div>

        <div className="space-y-6">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <div className="flex items-center gap-2 mb-3">
              <Star className="text-blue-500" />
              <h3 className="font-bold text-blue-800">Ventajas Principales</h3>
            </div>
            <ul className="space-y-2">
              {[
                '3D Rendering superior con triple tecnología',
                'Máxima interactividad y personalización',
                'Performance optimizado multiplataforma',
                'Sistema PBR para máximo realismo',
                'Personalización avanzada en tiempo real'
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Zap className="text-blue-400 h-4 w-4" />
                  <span className="text-sm text-blue-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-green-50 p-4 rounded-lg border border-green-100">
            <div className="flex items-center gap-2 mb-3">
              <Award className="text-green-500" />
              <h3 className="font-bold text-green-800">Características Destacadas</h3>
            </div>
            <ul className="space-y-2 text-sm text-green-700">
              <li>✓ Renderizado 3D en tiempo real</li>
              <li>✓ 60+ FPS en todos los dispositivos</li>
              <li>✓ Integración AR/VR</li>
              <li>✓ Personalización dinámica</li>
              <li>✓ Analytics avanzados</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-600">
              * Los valores están normalizados en una escala de 0-100 basados en capacidades técnicas documentadas y rendimiento real.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedBenchmarkVisualization;
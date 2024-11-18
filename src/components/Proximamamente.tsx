import { MapPin, Smartphone } from 'lucide-react';

export const FoodMenuBanner = () => {
  return (
    <div className="bg-gradient-to-r from-red-800 to-red-600 p-6 rounded-lg shadow-xl flex items-center justify-between">
      <div className="w-2/3 text-white">
        <h2 className="text-3xl font-bold mb-4">¡Próximamente: Realidad Aumentada!</h2>
        <div className="flex items-center space-x-4 mb-4">
          <Smartphone size={40} />
          <p className="text-xl">Explora los platillos como nunca antes</p>
        </div>
        <p className="text-lg">
          Próximamente podrás ver tus alimentos en 3D directamente en tu teléfono antes de ordenar
        </p>
      </div>
      <div className="w-1/3 flex justify-center">
        <div className="bg-white/20 rounded-full p-4">
          <MapPin size={80} className="text-white animate-bounce" />
        </div>
      </div>
    </div>
  );
};

export default FoodMenuBanner;
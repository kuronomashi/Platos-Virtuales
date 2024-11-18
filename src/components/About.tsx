export function About() {
  return (
    <div className="px-4 md:px-6 py-12 max-w-7xl mx-auto">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Acerca de Platos virtuales</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Acerca de Platos Virtuales
          Nos apasiona ofrecer una experiencia gastronómica innovadora y personalizada a través de la tecnología de realidad aumentada. Nuestra misión es conectar a los amantes de la comida con los mejores restaurantes y ofrecerles una experiencia visual y nutricional inmersiva.

        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        <div className="text-center">
          <div className="bg-rose-100 dark:bg-rose-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">👩‍🍳</span>
          </div>
          <h3 className="font-semibold mb-2">Chefs expertos</h3>
          <p className="text-muted-foreground">
            Nuestra plataforma trabaja con los chefs más destacados para garantizar que los platos virtuales representen fielmente la creatividad y la calidad gastronómica.
          </p>
        </div>
        <div className="text-center">
          <div className="bg-rose-100 dark:bg-rose-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">📱</span>
          </div>
          <h3 className="font-semibold mb-2">Exploración Interactiva</h3>
          <p className="text-muted-foreground">
            Permitimos a los usuarios visualizar y personalizar platos en 3D, brindando una experiencia única antes de ordenar.
          </p>
        </div>
        <div className="text-center">
          <div className="bg-rose-100 dark:bg-rose-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">⭐</span>
          </div>
          <h3 className="font-semibold mb-2">La Calidad es lo Primero</h3>
          <p className="text-muted-foreground">
            Nos comprometemos a proporcionar información nutricional detallada y a garantizar la precisión en cada interacción virtual.
          </p>
        </div>
      </div>
    </div>
  );
}
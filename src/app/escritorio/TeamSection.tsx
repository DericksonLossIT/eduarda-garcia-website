const people = [
  {
    name: 'Eduarda Garcia',
    role: 'Advogada',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bio: 'Advogada inscrita na OAB/RS sob o nº 124.956. Graduada em Ciências Jurídicas e Sociais pela Universidade Federal do Rio Grande do Sul (UFRGS). Especialista em Direito Penal e Processo Penal pelo Instituto de Direito Penal Económico e Europeu (IDPEE), da Faculdade de Direito da Universidade de Coimbra.',
  },
  {
    name: 'Thaís Alvarenga Machado',
    role: 'Estagiária',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bio: 'Estagiária inscrita na OAB-RS sob o nº 52E779. Graduanda no curso de Ciências Jurídicas e Sociais da Universidade Federal do Rio Grande do Sul. Ex-assessora jurídica no Grupo Antimanicomial de Atenção Integral (GAMAI) do Serviço de Assessoria Jurídica Universitária (SAJU) da UFRGS e integrante da Escola de Criminalistas.',
  },
  // More people...
]

function TeamSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Equipe
          </h2>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
        >
          {people.map((person) => (
            <li key={person.name} className="flex flex-col gap-6 xl:flex-row">
              <img
                className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover"
                src={person.imageUrl}
                alt=""
              />
              <div className="flex-auto">
                <h3 className="text-xl font-bold leading-8 tracking-tight text-gray-900">
                  {person.name}
                </h3>
                <p className="text-base font-semibold leading-7 text-gray-600">
                  {person.role}
                </p>
                <p className="mt-6 text-base leading-7 text-gray-600">
                  {person.bio}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TeamSection

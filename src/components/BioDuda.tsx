const stats = [
  { label: 'Founded', value: '2021' },
  { label: 'Employees', value: '37' },
  { label: 'Countries', value: '12' },
  { label: 'Raised', value: '$25M' },
]

export function BioDuda() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4">
            <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
              <img
                className="absolute inset-0 h-full w-full object-cover brightness-125 saturate-0"
                src="https://images.unsplash.com/photo-1630569267625-157f8f9d1a7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2669&q=80"
                alt=""
              />
            </div>
          </div>
          <div>
            <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Eduarda Garcia
              </h1>
              <div className="max-w-xl">
                <p className="mt-6">
                  Advogada inscrita na OAB/RS sob o nº 124.956, com sociedade
                  registrada sob o nº 12.579 (OAB/RS). Conselheira do Instituto
                  de Acesso à Justiça (IAJ). Pesquisadora no Grupo de Pesquisa
                  Antirracismo (UFRGS – CNPq). Membra da Sociedade Brasileira de
                  Direito Antidiscriminatório (SBDA).
                </p>
                <p className="mt-6">
                  Graduada em Ciências Jurídicas e Sociais pela Universidade
                  Federal do Rio Grande do Sul (UFRGS), foi Presidente do Centro
                  Acadêmico André da Rocha (CAAR) e Coordenadora Administrativa
                  da Federação Nacional de Estudantes de Direito (FENED).
                  Especialista em Direito Penal e Processo Penal pelo Instituto
                  de Direito Penal Económico e Europeu (IDPEE), da Faculdade de
                  Direito da Universidade de Coimbra.
                </p>
                <p className="mt-6">
                  Membra da Associação Brasileira dos Advogados Criminalistas no
                  Estado do Rio Grande do Sul (ABRACRIM-RS), do Instituto
                  Brasileiro de Ciências Criminais (IBCCRIM) e do Instituto da
                  Advocacia Negra Brasileira (IANB).
                </p>
                <p className="mt-6">
                  Conselheira do Instituto de Acesso à Justiça (IAJ).
                  Pesquisadora no Grupo de Pesquisa Antirracismo (UFRGS – CNPq).
                  Membra da Sociedade Brasileira de Direito Antidiscriminatório
                  (SBDA).
                </p>
              </div>
            </div>
            <dl className="mt-2 grid grid-cols-2 gap-8 pt-4 sm:grid-cols-4">
              <div>
                <div className="text-3xl font-bold leading-10 tracking-tight text-gray-900">
                  2021
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold leading-10 tracking-tight text-gray-900">
                  2021
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold leading-10 tracking-tight text-gray-900">
                  2021
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold leading-10 tracking-tight text-gray-900">
                  2021
                </div>
              </div>
            </dl>
            <div className="mt-10 flex">
              <a
                href="#"
                className="text-base font-semibold leading-7 text-indigo-600"
              >
                Saber mais <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

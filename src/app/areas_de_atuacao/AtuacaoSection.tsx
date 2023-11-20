const people = [
  {
    name: 'Advocacia Criminal e Antidiscriminatória Preventiva',
    role: 'Atuação em conflitos que possam ter repercussões policial e/ou judicial, de modo a diminuir os riscos e evitar eventuais sanções penais.',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  {
    name: 'Advocacia Criminal e Antidiscriminatória Consultiva',
    role: 'Elaboração de pareceres e opiniões legais (legal opinions), assim como capacitações e consultas técnicas, envolvendo matéria penal, processual penal e antidiscriminatória, inclusive em termos de equidade racial e de gênero.',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  {
    name: 'Investigação Defensiva e Assistência à Acusação',
    role: 'Atuação nas esferas policial e judicial em representação aos interesses de pessoas físicas e jurídicas vítimas de delitos, sobretudo crimes resultantes de preconceito de raça e de cor e crimes contra a liberdade religiosa.',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  {
    name: 'Prisões',
    role: 'Acompanhamento de flagrantes, cumprimento de prisões, audiências de custódia, pedidos de relaxamento de prisão, pedido de liberdade provisória e impetração de Habeas Corpus e de Mandado de Segurança. Atendimento 24 horas.',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  // More people...
]

export default function AtuacaoSection() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          {/* <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Our team
          </h2> */}
          <p className="text-lg leading-8 text-gray-300">
            Trabalhamos a partir do entendimento do contexto em que a demanda do
            cliente está inserida, entendendo suas expectativas, calculando os
            possíveis riscos penais e prejuízos envolvidos em sua atividade, bem
            como as necessidades específicas do caso concreto.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
        >
          {people.map((person) => (
            <li key={person.name}>
              <img
                className="aspect-[14/13] w-full rounded-2xl object-cover"
                src={person.imageUrl}
                alt=""
              />
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-white">
                {person.name}
              </h3>
              <p className="text-base leading-7 text-gray-300">{person.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

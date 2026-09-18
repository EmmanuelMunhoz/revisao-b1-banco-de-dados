window.QUESTION_BANK = [
  {
    "id": 1,
    "sourcePage": 2,
    "source": "Revisão B1.pdf",
    "module": 1,
    "moduleTitle": "Conceitos e Ciclo de Vida do Banco de Dados",
    "relatedModules": [
      1
    ],
    "topic": "conceito de SGBD",
    "type": "multiple-choice",
    "question": "No contexto de sistemas de computação voltados ao armazenamento de dados, o Sistema de Gerenciamento de Banco de Dados (SGBD) desempenha um papel fundamental. Sobre o conceito e a atuação de um SGBD, assinale a alternativa correta.",
    "options": {
      "A": "Trata-se exclusivamente de um software antivírus focado em proteger os arquivos de texto e tabelas brutas contra ataques cibernéticos maliciosos",
      "B": "É uma ferramenta de hardware dedicada unicamente a acelerar o processamento de planilhas eletrônicas locais em computadores de uso pessoal",
      "C": "Um SGBD é composto por coleções de arquivos e programas inter-relacionados que permitem aos usuários acessar, gerenciar, consultar e alterar esses dados de maneira controlada.",
      "D": "Refere-se a um modelo de rede social voltado para a troca de arquivos estruturados entre servidores corporativos sem a necessidade de autenticação",
      "E": "Consiste em um sistema operacional de código aberto utilizado para gerenciar a memória RAM e os drivers de dispositivos periféricos de uma máquina"
    },
    "answer": "C",
    "scored": true,
    "sourceStatus": "ok",
    "note": "",
    "answerBasis": "Um SGBD é composto por coleções de arquivos e programas inter-relacionados que permitem aos usuários acessar, gerenciar, consultar e alterar esses dados de maneira controlada."
  },
  {
    "id": 2,
    "sourcePage": 3,
    "source": "Revisão B1.pdf",
    "module": 1,
    "moduleTitle": "Conceitos e Ciclo de Vida do Banco de Dados",
    "relatedModules": [
      1
    ],
    "topic": "abstração de dados",
    "type": "multiple-choice",
    "question": "Os Sistemas de Gerenciamento de Bancos de Dados (SGBDs) foram desenvolvidos para superar as limitações dos sistemas de arquivos tradicionais, oferecendo um ambiente conveniente e eficiente para o armazenamento e a recuperação de informações. Considerando as características e funções centrais de um SGBD, assinale a alternativa correta.",
    "options": {
      "A": "Ele obriga o programador a conhecer detalhadamente o endereço físico exato e o setor de cada bloco de disco onde o dado está gravado",
      "B": "O SGBD provê a abstração de dados, ocultando detalhes complexos de baixo nível do armazenamento físico e permitindo que os usuários interajam com uma visão lógica simplificada.",
      "C": "Sua única função restringe-se à formatação de discos rígidos em servidores de rede para aumentar a velocidade de conexão com a internet",
      "D": "Trata-se de um sistema operacional proprietário projetado exclusivamente para gerenciar a interface gráfica do usuário final em computadores pessoais",
      "E": "Ele elimina totalmente a necessidade de definir regras de integridade ou controle de acesso, deixando os dados completamente livres para qualquer alteração"
    },
    "answer": "B",
    "scored": true,
    "sourceStatus": "ok",
    "note": "",
    "answerBasis": "O SGBD provê a abstração de dados, ocultando detalhes complexos de baixo nível do armazenamento físico e permitindo que os usuários interajam com uma visão lógica simplificada."
  },
  {
    "id": 3,
    "sourcePage": 4,
    "source": "Revisão B1.pdf",
    "module": 1,
    "moduleTitle": "Conceitos e Ciclo de Vida do Banco de Dados",
    "relatedModules": [
      1
    ],
    "topic": "atomicidade e acesso concorrente",
    "type": "multiple-choice",
    "question": "Nos sistemas de computação modernos, o acesso concorrente e a ocorrência de falhas em tempo de execução representam desafios críticos para a integridade das informações armazenadas. Com base nos conceitos fundamentais de controle e gerenciamento de dados em um SGBD, assinale a alternativa correta.",
    "options": {
      "A": "A anomalia de acesso concorrente ocorre estritamente quando há apenas um único usuário conectado ao sistema em computadores desconectados de redes locais",
      "B": "Sistemas computacionais estão sujeitos a falhas e, para assegurar a atomicidade, é crucial garantir que, diante de um erro, os dados retornem ao seu último estado consistente anterior à falha.",
      "C": "O problema de atomicidade refere-se unicamente à velocidade de processamento das placas de vídeo dedicadas a jogos tridimensionais de alta definição",
      "D": "A melhor forma de resolver problemas de segurança em um banco de dados corporativo é conceder acesso pleno e irrestrito de administrador a todos os estagiários da empresa",
      "E": "O acesso concorrente controlado impede completamente que múltiplos programas leiam dados estáticos simultaneamente, bloqueando permanentemente qualquer tipo de transação de leitura"
    },
    "answer": "B",
    "scored": true,
    "sourceStatus": "ok",
    "note": "",
    "answerBasis": "Sistemas computacionais estão sujeitos a falhas e, para assegurar a atomicidade, é crucial garantir que, diante de um erro, os dados retornem ao seu último estado consistente anterior à falha."
  },
  {
    "id": 4,
    "sourcePage": 5,
    "source": "Revisão B1.pdf",
    "module": 1,
    "moduleTitle": "Conceitos e Ciclo de Vida do Banco de Dados",
    "relatedModules": [
      1
    ],
    "topic": "arquivos tradicionais vs SGBD",
    "type": "multiple-choice",
    "question": "Historicamente, antes da ampla adoção dos Sistemas de Gerenciamento de Bancos de Dados (SGBDs), as aplicações corporativas armazenavam suas informações de forma persistente utilizando sistemas de arquivos tradicionais baseados no sistema operacional. Com base na comparação entre o uso de arquivos isolados e o uso de SGBDs para a persistência de dados, assinale a alternativa correta.",
    "options": {
      "A": "O armazenamento em arquivos tradicionais garante nativamente a integridade e impede a redundância de dados, tornando o uso de SGBDs desnecessário em qualquer cenário",
      "B": "Nos sistemas baseados em arquivos, os dados encontram-se frequentemente dispersos em vários formatos diferentes, gerando isolamento de dados e dificultando a escrita de novas aplicações para a recuperação apropriada das informações.",
      "C": "A utilização de arquivos locais elimina completamente a necessidade de programar rotinas específicas de leitura, pois o próprio sistema operacional organiza automaticamente as relações lógicas entre as tabelas",
      "D": "Um sistema baseado em arquivos possui mecanismos avançados integrados de controle de concorrência que impedem que dois usuários modifiquem o mesmo registro simultaneamente de forma segura",
      "E": "O uso de arquivos reduz expressivamente a dificuldade de acesso aos dados, uma vez que qualquer informação nova que surja na empresa é automaticamente interpretada e gerada em relatórios sem a necessidade de criar novos programas"
    },
    "answer": "B",
    "scored": true,
    "sourceStatus": "ok",
    "note": "",
    "answerBasis": "Nos sistemas baseados em arquivos, os dados encontram-se frequentemente dispersos em vários formatos diferentes, gerando isolamento de dados e dificultando a escrita de novas aplicações para a recuperação apropriada das informações."
  },
  {
    "id": 5,
    "sourcePage": 6,
    "source": "Revisão B1.pdf",
    "module": 1,
    "moduleTitle": "Conceitos e Ciclo de Vida do Banco de Dados",
    "relatedModules": [
      1
    ],
    "topic": "esquema vs instância",
    "type": "multiple-choice",
    "question": "No contexto de sistemas de bancos de dados, a arquitetura de três esquemas e a separação conceitual entre o projeto estrutural e os dados reais são fundamentais. Sobre os conceitos de esquema e instância, assinale a alternativa correta.",
    "options": {
      "A": "O esquema refere-se aos dados que mudam constantemente a cada segundo de transação, enquanto a instância representa a estrutura estática que nunca se altera ao longo do ciclo de vida do sistema",
      "B": "O esquema de um banco de dados corresponde à estrutura lógica geral do projeto, que permanece relativamente constante ao longo do tempo, ao passo que a instância representa o conjunto de dados armazenados no banco em um determinado momento.",
      "C": "Instância e esquema são sinônimos perfeitos utilizados para descrever o código-fonte compilado da aplicação cliente que acessa o servidor de rede",
      "D": "O esquema é a tela de interface gráfica visualizada pelo usuário final, e a instância é o arquivo compactado de backup gerado automaticamente todas as noites",
      "E": "A instância define restritamente o modelo conceitual em formato de texto plano, enquanto o esquema representa unicamente os registros inseridos na última hora"
    },
    "answer": "B",
    "scored": true,
    "sourceStatus": "ok",
    "note": "",
    "answerBasis": "O esquema de um banco de dados corresponde à estrutura lógica geral do projeto, que permanece relativamente constante ao longo do tempo, ao passo que a instância representa o conjunto de dados armazenados no banco em um determinado momento."
  },
  {
    "id": 6,
    "sourcePage": 7,
    "source": "Revisão B1.pdf",
    "module": 1,
    "moduleTitle": "Conceitos e Ciclo de Vida do Banco de Dados",
    "relatedModules": [
      1
    ],
    "topic": "instância",
    "type": "multiple-choice",
    "question": "No contexto de sistemas de bancos de dados, o conceito de \"instância\" é fundamental para diferenciar a estrutura estática dos dados dinâmicos de um sistema. Assinale a alternativa que descreve corretamente o conceito de instância.",
    "options": {
      "A": "É o projeto lógico global e estrutural do banco de dados que permanece inalterado ao longo de toda a vida útil da aplicação",
      "B": "Refere-se exclusivamente ao arquivo de código-fonte utilizado para configurar o compilador da linguagem de programação do sistema",
      "C": "Corresponde ao conjunto de informações e dados armazenados no banco de dados em um determinado momento específico, sofrendo alterações frequentes a cada transação.",
      "D": "Trata-se da restrição física de hardware responsável por alimentar eletricamente os servidores em caso de falha de energia elétrica",
      "E": "É a representação gráfica abstrata utilizada unicamente para desenhar diagramas de classes em ferramentas de engenharia de software"
    },
    "answer": "C",
    "scored": true,
    "sourceStatus": "ok",
    "note": "",
    "answerBasis": "Corresponde ao conjunto de informações e dados armazenados no banco de dados em um determinado momento específico, sofrendo alterações frequentes a cada transação."
  },
  {
    "id": 7,
    "sourcePage": 8,
    "source": "Revisão B1.pdf",
    "module": 1,
    "moduleTitle": "Conceitos e Ciclo de Vida do Banco de Dados",
    "relatedModules": [
      1
    ],
    "topic": "esquema",
    "type": "multiple-choice",
    "question": "Em um sistema de banco de dados, o projeto estrutural é separado dos dados dinâmicos armazenados. Assinale a alternativa que define corretamente o conceito de esquema de um banco de dados.",
    "options": {
      "A": "É o conjunto volátil e dinâmico de dados que se modifica constantemente a cada inserção ou exclusão de registros realizada pelos usuários no dia a dia",
      "B": "O esquema de um banco de dados representa a estrutura lógica global do sistema, definindo as tabelas, campos, tipos e relacionamentos, sendo projetado durante a fase de modelagem e alterado com pouca frequência.",
      "C": "Refere-se unicamente ao cabeamento físico de rede responsável por interligar as estações de trabalho locais ao servidor central de processamento",
      "D": "Trata-se de um software antivírus instalado nos terminais corporativos para checar a segurança contra invasões externas em tempo real",
      "E": "É o relatório gerencial impresso gerado automaticamente ao final de cada turno com o balanço financeiro bruto da empresa"
    },
    "answer": "B",
    "scored": true,
    "sourceStatus": "ok",
    "note": "",
    "answerBasis": "O esquema de um banco de dados representa a estrutura lógica global do sistema, definindo as tabelas, campos, tipos e relacionamentos, sendo projetado durante a fase de modelagem e alterado com pouca frequência."
  },
  {
    "id": 8,
    "sourcePage": 9,
    "source": "Revisão B1.pdf",
    "module": 1,
    "moduleTitle": "Conceitos e Ciclo de Vida do Banco de Dados",
    "relatedModules": [
      1
    ],
    "topic": "níveis de abstração",
    "type": "multiple-choice",
    "question": "Para simplificar a interação dos usuários com o sistema e ocultar detalhes complexos de armazenamento, a arquitetura de banco de dados organiza-se em diferentes níveis de abstração. Sobre os níveis de abstração de dados, assinale a alternativa correta.",
    "options": {
      "A": "O nível físico corresponde ao nível mais alto de abstração, voltado exclusivamente para a criação de telas e relatórios visuais destinados aos gerentes corporativos",
      "B": "O nível lógico é o mais baixo nível de abstração, descrevendo detalhadamente os setores e trilhas magnéticas do disco rígido onde os bytes são gravados",
      "C": "O nível de visão é o mais alto nível de abstração, que descreve apenas parte do banco de dados e oculta os detalhes dos dados completos para diferentes grupos de usuários.",
      "D": "O nível físico é responsável por definir os relacionamentos conceituais entre tabelas sem qualquer ligação com o hardware ou com os arquivos do sistema operacional",
      "E": "O nível lógico restringe-se unicamente ao armazenamento temporário de senhas de acesso na memória cache da placa de vídeo"
    },
    "answer": "C",
    "scored": true,
    "sourceStatus": "ok",
    "note": "",
    "answerBasis": "O nível de visão é o mais alto nível de abstração, que descreve apenas parte do banco de dados e oculta os detalhes dos dados completos para diferentes grupos de usuários."
  },
  {
    "id": 9,
    "sourcePage": 10,
    "source": "Revisão B1.pdf",
    "module": 1,
    "moduleTitle": "Conceitos e Ciclo de Vida do Banco de Dados",
    "relatedModules": [
      1
    ],
    "topic": "levantamento de requisitos e domínio",
    "type": "multiple-choice",
    "question": "No processo de aprendizagem e projeto de bancos de dados, a introdução a cenários do mundo real, como a estruturação de sistemas para escolas, estacionamentos ou oficinas mecânicas, exige que o projetista compreenda e defina os requisitos informacionais. Com base nessa prática inicial de modelagem, assinale a alternativa correta.",
    "options": {
      "A": "A modelagem de requisitos para cenários do mundo real dispensa qualquer levantamento sobre as regras de negócio da empresa, focando apenas na escolha da marca do servidor físico",
      "B": "Projetar um banco de dados para um domínio específico, como uma oficina mecânica ou uma escola, envolve identificar as entidades relevantes, os dados pertinentes ao negócio e as relações estruturais necessárias para refletir a realidade operacional.",
      "C": "O desenvolvimento de um banco de dados para estacionamentos exige unicamente a criação de rotinas de criptografia de senhas de rede sem relação com o registro de veículos",
      "D": "Em cenários práticos de modelagem inicial, as tabelas e os relacionamentos são gerados de forma totalmente aleatória por algoritmos de inteligência artificial sem intervenção humana",
      "E": "Sistemas voltados para escolas e oficinas mecânicas utilizam obrigatoriamente a mesma e exata estrutura física de arquivos de texto sem qualquer separação em entidades lógicas"
    },
    "answer": "B",
    "scored": true,
    "sourceStatus": "ok",
    "note": "",
    "answerBasis": "Projetar um banco de dados para um domínio específico, como uma oficina mecânica ou uma escola, envolve identificar as entidades relevantes, os dados pertinentes ao negócio e as relações estruturais necessárias para refletir a realidade operacional."
  },
  {
    "id": 10,
    "sourcePage": 11,
    "source": "Revisão B1.pdf",
    "module": 1,
    "moduleTitle": "Conceitos e Ciclo de Vida do Banco de Dados",
    "relatedModules": [
      1
    ],
    "topic": "requisitos influenciam a modelagem",
    "type": "multiple-choice",
    "question": "Durante a fase de levantamento e análise de requisitos, percebe-se que a modelagem de dados para o mundo real não é única. Sobre a influência dos requisitos de software na estruturação de um banco de dados, assinale a alternativa correta.",
    "options": {
      "A": "A modelagem de um banco de dados é universal e rígida, devendo ser idêntica para qualquer software, independentemente dos objetivos ou das regras de negócio da aplicação",
      "B": "Diferentes sistemas voltados para o mesmo domínio do mundo real podem resultar em modelagens de dados distintas, uma vez que o projeto lógico e conceitual depende diretamente dos requisitos específicos e das necessidades informacionais de cada aplicação.",
      "C": "A estrutura de tabelas de um banco de dados é definida unicamente pela capacidade de armazenamento da memória RAM do servidor, desconsiderando as regras do negócio",
      "D": "Sistemas de computação distintos jamais podem representar objetos reais semelhantes sob perspectivas diferentes, sob pena de falha imediata no hardware",
      "E": "O modelo de dados para uma escola e para uma oficina mecânica deve ser obrigatoriamente idêntico, visto que ambos os estabelecimentos lidam com cadastros básicos de pessoas"
    },
    "answer": "B",
    "scored": true,
    "sourceStatus": "ok",
    "note": "",
    "answerBasis": "Diferentes sistemas voltados para o mesmo domínio do mundo real podem resultar em modelagens de dados distintas, uma vez que o projeto lógico e conceitual depende diretamente dos requisitos específicos e das necessidades informacionais de cada aplicação."
  },
  {
    "id": 11,
    "sourcePage": 12,
    "source": "Revisão B1.pdf",
    "module": 1,
    "moduleTitle": "Conceitos e Ciclo de Vida do Banco de Dados",
    "relatedModules": [
      1
    ],
    "topic": "modelagem contextual de entidades",
    "type": "multiple-choice",
    "question": "Durante as atividades práticas de modelagem conceitual, é comum que diferentes sistemas do mundo real utilizam conceitos semelhantes, como a representação de um \"veículo\". Suponha que uma entidade chamada \"Veículo\" tenha sido modelada detalhadamente para o sistema de uma oficina mecânica (incluindo histórico de peças trocadas, manutenções e mecânicos responsáveis). Ao projetar um banco de dados para um sistema de estacionamento, que também precisa registrar veículos, um analista avalia se pode aproveitar exatamente a mesma estrutura. Sobre a reutilização de modelos de dados entre contextos distintos, assinale a alternativa correta.",
    "options": {
      "A": "A entidade \"Veículo\" desenvolvida para a oficina mecânica pode ser copiada e colada integralmente para o estacionamento sem nenhuma alteração, pois o conceito físico de um automóvel é universal em qualquer software.",
      "B": "A modelagem de um dado depende diretamente dos requisitos e dos objetivos do sistema; logo, embora o objeto \"veículo\" exista em ambos os cenários, os atributos e relacionamentos necessários mudam (o estacionamento foca em controle de vagas e horários de entrada/saída, enquanto a oficina foca em manutenções e histórico de reparos).",
      "C": "O sistema de estacionamento é obrigado por lei a utilizar o mesmo modelo de custos de peças de reposição de uma oficina mecânica para calcular o valor cobrado por hora.",
      "D": "A modelagem conceitual de domínios diferentes anula a necessidade de usar chaves primárias, tornando os registros independentes de regras de negócio.",
      "E": "Sistemas de estacionamento e oficinas mecânicas compartilham exatamente a mesma visão lógica de dados, eliminando a necessidade de qualquer análise prévia de requisitos no segundo sistema."
    },
    "answer": "B",
    "scored": true,
    "sourceStatus": "ok",
    "note": "",
    "answerBasis": "A modelagem de um dado depende diretamente dos requisitos e dos objetivos do sistema; logo, embora o objeto \"veículo\" exista em ambos os cenários, os atributos e relacionamentos necessários mudam (o estacionamento foca em controle de vagas e horários de entrada/saída, enquanto a oficina foca em manutenções e histórico de reparos)."
  },
  {
    "id": 12,
    "sourcePage": 13,
    "source": "Revisão B1.pdf",
    "module": 1,
    "moduleTitle": "Conceitos e Ciclo de Vida do Banco de Dados",
    "relatedModules": [
      1
    ],
    "topic": "adaptação da modelagem ao contexto",
    "type": "multiple-choice",
    "question": "Um analista de sistemas foi encarregado de modelar um banco de dados para o prontuário eletrônico de um consultório médico, mapeando detalhadamente a entidade \"Pessoa\" como um paciente (com histórico de doenças, alergias e convênio médico). Meses depois, o mesmo analista precisa projetar o sistema de inscrições para o vestibular de uma faculdade, que também precisa cadastrar \"Pessoas\", mas agora como candidatos (com notas de provas, cursos escolhidos e locais de prova). Ao avaliar se a modelagem da entidade \"Pessoa\" do consultório pode ser aproveitada diretamente no sistema da faculdade, assinale a alternativa correta.",
    "options": {
      "A": "A entidade \"Pessoa\" pode ser reaproveitada de forma idêntica em ambos os sistemas, visto que o conceito de ser humano e seus dados de identificação civil são universais na computação",
      "B": "Embora o conhecimento prévio sobre o cadastro de pessoas ajude, a diferença fundamental nos requisitos e nas regras de negócio (histórico clínico versus processo seletivo acadêmico) exige que a modelagem conceitual seja adaptada e reestruturada para atender aos objetivos específicos do novo sistema.",
      "C": "O sistema de vestibular é obrigado por lei a herdar toda a estrutura de prontuários médicos e restrições de convênios de saúde da aplicação anterior",
      "D": "A modelagem de dados anula a necessidade de analisar novos requisitos de software, bastando copiar as tabelas médicas para o banco de dados da universidade",
      "E": "O sistema universitário dispensa o uso de entidades estruturadas para cadastrar pessoas, utilizando exclusivamente arquivos de texto simples para armazenar as inscrições"
    },
    "answer": "B",
    "scored": true,
    "sourceStatus": "ok",
    "note": "",
    "answerBasis": "Embora o conhecimento prévio sobre o cadastro de pessoas ajude, a diferença fundamental nos requisitos e nas regras de negócio (histórico clínico versus processo seletivo acadêmico) exige que a modelagem conceitual seja adaptada e reestruturada para atender aos objetivos específicos do novo sistema."
  },
  {
    "id": 13,
    "sourcePage": 14,
    "source": "Revisão B1.pdf",
    "module": 1,
    "moduleTitle": "Conceitos e Ciclo de Vida do Banco de Dados",
    "relatedModules": [
      1
    ],
    "topic": "identificação de entidades no domínio",
    "type": "multiple-choice",
    "question": "Considere um pequeno cenário do mundo real para o desenvolvimento de um novo sistema: uma locadora de automóveis precisa controlar o aluguel de carros para seus clientes. Durante a fase inicial de levantamento de requisitos para a modelagem conceitual do banco de dados, o projetista precisa identificar as principais entidades e informações que farão parte do escopo operacional básico desse negócio. Com base nas práticas de modelagem conceitual voltadas para cenários do mundo real, assinale a alternativa correta.",
    "options": {
      "A": "O modelo conceitual deve focar unicamente na quantidade exata de memória RAM que o servidor físico utilizará para rodar o sistema operacional da locadora",
      "B": "O projetista deve mapear e estruturar as entidades fundamentais do domínio, como Cliente, Veículo e Locação, definindo seus atributos e relacionamentos para refletir fielmente as regras operacionais do negócio.",
      "C": "A modelagem de dados para a locadora dispensa qualquer análise de regras de negócio, bastando criar uma única tabela gigante contendo todos os dados misturados de forma aleatória",
      "D": "O sistema de locação de veículos deve ignorar completamente o cadastro de clientes, registrando apenas a placa dos carros em arquivos de texto locais sem nenhuma relação lógica",
      "E": "A estrutura de dados de uma locadora é idêntica à de um consultório médico, permitindo aproveitar exatamente as mesmas tabelas de prontuários para registrar o histórico de aluguéis"
    },
    "answer": "B",
    "scored": true,
    "sourceStatus": "ok",
    "note": "",
    "answerBasis": "O projetista deve mapear e estruturar as entidades fundamentais do domínio, como Cliente, Veículo e Locação, definindo seus atributos e relacionamentos para refletir fielmente as regras operacionais do negócio."
  },
  {
    "id": 14,
    "sourcePage": 15,
    "source": "Revisão B1.pdf",
    "module": 2,
    "moduleTitle": "Modelo Entidade-Relacionamento (MER/DER)",
    "relatedModules": [
      2
    ],
    "topic": "entidade Livro e atributos",
    "type": "multiple-choice",
    "question": "Para um novo sistema de controle de uma livraria, o projetista precisa mapear corretamente os dados essenciais para o cadastro de Livros. Considerando as boas práticas de modelagem de dados e a identificação de entidades e seus respectivos atributos, assinale a alternativa que apresenta a modelagem mais adequada para este cenário.",
    "options": {
      "A": "Entidade: Livro. Atributos: ID_Livro (Chave Primária), Titulo, ISBN, Ano_Publicacao, Preco e Quantidade_Estoque.",
      "B": "Entidade: Livro. Atributos exclusivos: Placa_Veiculo, Quilometragem, Chassi e Categoria_CNH do motorista",
      "C": "Entidade: Livro. Atributos: Historico_Medico, Tipo_Sanguineo, Alergias_Glebas e Codigo_Convenio",
      "D": "Entidade: Livro. Atributos: Temperatura_Corporal, Pressao_Arterial e Frequencia_Cardiaca_Por_Minuto",
      "E": "Entidade: Livro. Atributos: Numero_Vaga, Horario_Entrada, Horario_Saida e Placa_Automovel"
    },
    "answer": "A",
    "scored": true,
    "sourceStatus": "ok",
    "note": "",
    "answerBasis": "Entidade: Livro. Atributos: ID_Livro (Chave Primária), Titulo, ISBN, Ano_Publicacao, Preco e Quantidade_Estoque."
  },
  {
    "id": 15,
    "sourcePage": 16,
    "source": "Revisão B1.pdf",
    "module": 2,
    "moduleTitle": "Modelo Entidade-Relacionamento (MER/DER)",
    "relatedModules": [
      2
    ],
    "topic": "identificação de entidades",
    "type": "multiple-choice",
    "question": "Com base estritamente nesse cenário e nos conceitos básicos de entidades, assinale a alternativa que apresenta de forma correta e completa as entidades que devem ser mapeadas.",
    "options": {
      "A": "Cliente e Produto.",
      "B": "Monitor, Teclado, Mouse e Gabinete",
      "C": "Nota Fiscal, Boleto Bancário e Carrinho de Compras",
      "D": "Tabela, Coluna, Linha e Chave Estrangeira",
      "E": "Sistema Operacional, Compilador e Editor de Texto"
    },
    "answer": "A",
    "scored": false,
    "sourceStatus": "source-context-incomplete",
    "note": "O próprio PDF inicia esta questão com 'Com base estritamente nesse cenário', mas o cenário anterior não aparece na página da questão. Exibir aviso e não contar na pontuação.",
    "answerBasis": "Cliente e Produto."
  },
  {
    "id": 16,
    "sourcePage": 17,
    "source": "Revisão B1.pdf",
    "module": 2,
    "moduleTitle": "Modelo Entidade-Relacionamento (MER/DER)",
    "relatedModules": [
      2
    ],
    "topic": "papéis distintos como entidades",
    "type": "multiple-choice",
    "question": "Durante a análise e modelagem conceitual de um sistema para uma empresa comercial, o projetista de banco de dados se depara com a necessidade de mapear dados referentes a clientes (que compram produtos), funcionários (que realizam as vendas) e fornecedores (que entregam as mercadorias). Considerando os conceitos do Modelo Entidade-Relacionamento e as boas práticas de modelagem conceitual para evitar ambiguidades, assinale a alternativa que apresenta a modelagem mais adequada e a respectiva justificativa.",
    "options": {
      "A": "Deve-se criar uma única tabela genérica chamada \"Pessoa\" para armazenar todos, pois cliente, funcionário e fornecedor compartilham características comuns, eliminando qualquer necessidade de tabelas separadas",
      "B": "Deve-se criar entidades distintas para Cliente, Funcionário e Fornecedor, pois, embora todos possam ser pessoas no mundo real, possuem papéis operacionais, atributos específicos e relacionamentos totalmente diferentes dentro do contexto do sistema.",
      "C": "O sistema deve ignorar o cadastro de funcionários e fornecedores, mantendo exclusivamente a entidade Cliente, visto que o foco comercial da empresa reside apenas no consumidor final",
      "D": "A modelagem correta exige que fornecedores e clientes sejam fundidos em uma única entidade, enquanto os funcionários devem ser representados unicamente como arquivos de texto locais sem vínculo com o banco de dados",
      "E": "Deve-se utilizar a mesma estrutura de tabelas de um prontuário médico para cadastrar clientes, funcionários e fornecedores, aproveitando a padronização universal de softwares"
    },
    "answer": "B",
    "scored": true,
    "sourceStatus": "ok",
    "note": "",
    "answerBasis": "Deve-se criar entidades distintas para Cliente, Funcionário e Fornecedor, pois, embora todos possam ser pessoas no mundo real, possuem papéis operacionais, atributos específicos e relacionamentos totalmente diferentes dentro do contexto do sistema."
  },
  {
    "id": 17,
    "sourcePage": 18,
    "source": "Revisão B1.pdf",
    "module": 2,
    "moduleTitle": "Modelo Entidade-Relacionamento (MER/DER)",
    "relatedModules": [
      2
    ],
    "topic": "separação conceitual de entidades",
    "type": "multiple-choice",
    "question": "Durante a modelagem conceitual de um sistema para uma grande rede de e-commerce, o projetista se depara com a necessidade de representar elementos do negócio que possuem características estruturais e propósitos operacionais distintos, como Produtos, Pedidos e Pagamentos. Surge então o questionamento se esses elementos poderiam ser fundidos em uma única tabela genérica ou se deveriam ser tratados de forma independente. Considerando as boas práticas de modelagem conceitual e a clareza das regras de negócio, assinale a alternativa que apresenta a modelagem mais adequada acompanhada de sua respectiva justificativa.",
    "options": {
      "A": "Deve-se criar uma única tabela genérica contendo todos os dados misturados, pois qualquer item do sistema possui um código de identificação, tornando desnecessária a separação de conceitos no banco de dados",
      "B": "O sistema deve ignorar o cadastro de pagamentos e fornecedores, mantendo exclusivamente a entidade Produto, visto que o lucro corporativo depende unicamente de manter o catálogo de mercadorias ativo no site",
      "C": "Deve-se criar entidades distintas para Produto, Pedido e Pagamento, pois, embora todos façam parte do mesmo sistema comercial, eles possuem atributos específicos, ciclos de vida próprios, regras de negócio e relacionamentos totalmente diferentes no contexto da aplicação.",
      "D": "A modelagem correta exige que o cadastro de pedidos utilize obrigatoriamente a mesma estrutura física de arquivos de texto de um editor comum, padronizando os dados sem usar o SGBD",
      "E": "Os pagamentos devem ser mantidos unicamente na memória RAM volátil, enquanto produtos e pedidos compartilham exatamente a mesma chave primária sem nenhuma restrição de integridade"
    },
    "answer": "C",
    "scored": true,
    "sourceStatus": "ok",
    "note": "",
    "answerBasis": "Deve-se criar entidades distintas para Produto, Pedido e Pagamento, pois, embora todos façam parte do mesmo sistema comercial, eles possuem atributos específicos, ciclos de vida próprios, regras de negócio e relacionamentos totalmente diferentes no contexto da aplicação."
  },
  {
    "id": 18,
    "sourcePage": 19,
    "source": "Revisão B1.pdf",
    "module": 2,
    "moduleTitle": "Modelo Entidade-Relacionamento (MER/DER)",
    "relatedModules": [
      2
    ],
    "topic": "entidades e atributos em biblioteca",
    "type": "multiple-choice",
    "question": "Em um cenário simplificado para o controle de uma pequena biblioteca, o projetista precisa modelar duas entidades fundamentais: Livro (para o acervo) e Leitor (para as pessoas cadastradas que pegam emprestado). Com base nas boas práticas de modelagem conceitual, assinale a alternativa que apresenta corretamente as entidades acompanhadas de seus respectivos campos (atributos) essenciais e de uma justificativa conceitual adequada.",
    "options": {
      "A": "Entidade Livro com os campos ID_Livro, Titulo e Ano_Publicacao; e Entidade Leitor com os campos ID_Leitor, Nome e Telefone. A separação é necessária porque ambas representam conceitos do mundo real com atributos e papéis operacionais totalmente distintos na biblioteca.",
      "B": "Entidade Livro contendo os campos Placa, Chassi e Quilometragem; e Entidade Leitor contendo os campos Temperatura, Pressao_Arterial e Tipo_Sanguineo. A modelagem deve ser feita dessa forma para garantir que a biblioteca funcione como uma oficina mecânica de veículos",
      "C": "Deve existir apenas uma única tabela genérica chamada \"Dados\" que armazena misturados o título do livro, o telefone do leitor e o histórico médico, dispensando a criação de entidades separadas",
      "D": "O sistema deve utilizar unicamente arquivos de texto locais para registrar os livros e leitores, eliminando a necessidade de definir chaves primárias e campos estruturados",
      "E": "A entidade Leitor deve herdar obrigatoriamente todos os custos de peças automotivas do fornecedor, pois a modelagem de dados permite fundir qualquer conceito sem critérios lógicos"
    },
    "answer": "A",
    "scored": true,
    "sourceStatus": "ok",
    "note": "",
    "answerBasis": "Entidade Livro com os campos ID_Livro, Titulo e Ano_Publicacao; e Entidade Leitor com os campos ID_Leitor, Nome e Telefone. A separação é necessária porque ambas representam conceitos do mundo real com atributos e papéis operacionais totalmente distintos na biblioteca."
  },
  {
    "id": 19,
    "sourcePage": 20,
    "source": "Revisão B1.pdf",
    "module": 2,
    "moduleTitle": "Modelo Entidade-Relacionamento (MER/DER)",
    "relatedModules": [
      2
    ],
    "topic": "entidade vs atributo",
    "type": "multiple-choice",
    "question": "Durante a modelagem conceitual de um sistema para uma grande loja de departamentos, os alunos se depararam com um dilema clássico ao analisar o elemento \"Endereço\" dos clientes: alguns queriam modelá-lo apenas como um texto simples (atributo composto ou multivalorado da entidade Cliente), enquanto outros queriam transformá-lo em uma entidade independente (com rua, bairro, cidade, estado e CEP próprios), devido à necessidade de reutilizar o endereço para entregas múltiplas e filiais. Com base nos conceitos fundamentais do Modelo Entidade-Relacionamento e na distinção entre esses dois conceitos, assinale a alternativa correta que resolve o impasse conceitual e sua justificativa.",
    "options": {
      "A": "Um endereço deve ser sempre transformado em uma entidade autônoma com identificador próprio sempre que ele possuir vida própria, múltiplos atributos detalhados e precisar ser compartilhado ou referenciado de forma independente por vários registros (como múltiplos pedidos ou clientes).",
      "B": "O conceito de atributo e entidade são exatamente a mesma coisa na computação, permitindo que qualquer texto seja convertido em tabela física sem critérios lógicos",
      "C": "Endereços nunca podem ser considerados atributos em nenhuma hipótese, devendo obrigatório e exclusivamente virar tabelas isoladas ligadas a arquivos de texto locais",
      "D": "A modelagem conceitual proíbe categoricamente que um objeto do mundo real possua propriedades descritivas, aceitando apenas chaves primárias numéricas",
      "E": "Deve-se descartar completamente o endereço do cliente e substituí-lo por coordenadas de GPS geradas por hardware em tempo de execução"
    },
    "answer": "A",
    "scored": true,
    "sourceStatus": "ok",
    "note": "",
    "answerBasis": "Um endereço deve ser sempre transformado em uma entidade autônoma com identificador próprio sempre que ele possuir vida própria, múltiplos atributos detalhados e precisar ser compartilhado ou referenciado de forma independente por vários registros (como múltiplos pedidos ou clientes)."
  },
  {
    "id": 20,
    "sourcePage": 21,
    "source": "Revisão B1.pdf",
    "module": 2,
    "moduleTitle": "Modelo Entidade-Relacionamento (MER/DER)",
    "relatedModules": [
      2
    ],
    "topic": "atributo simples/atômico conforme requisito",
    "type": "multiple-choice",
    "question": "Durante o levantamento de requisitos para um sistema simples de emissão de crachás de visitantes em um clube, especificou-se que o nome do visitante deve ser armazenado exclusivamente para fins de impressão visual direta no crachá, sem qualquer necessidade de o sistema realizar buscas, ordenações ou tratamentos isolados em partes específicas desse nome. Considerando a análise dos requisitos para a definição dos atributos, assinale a alternativa que indica a forma adequada de modelar esse campo.",
    "options": {
      "A": "O campo deve ser representado como um único atributo atômico e conjunto, pois as regras de negócio indicam que o dado será manipulado apenas como um bloco único de texto, sem necessidade de consultas parciais.",
      "B": "O campo deve ser obrigatoriamente dividido em múltiplos atributos separados, pois as regras de negócio exigem consultas, ordenações e manipulações independentes de suas partes componentes",
      "C": "O sistema deve ignorar o uso de atributos textuais, substituindo qualquer campo de identificação por chaves numéricas geradas aleatoriamente por hardware",
      "D": "A modelagem conceitual exige que qualquer dado descritivo seja transformado em uma entidade fraca independente, independentemente dos requisitos do sistema",
      "E": "Os dados textuais devem ser descartados do banco de dados relacional e armazenados exclusivamente em arquivos de texto locais sem estrutura"
    },
    "answer": "A",
    "scored": true,
    "sourceStatus": "ok",
    "note": "",
    "answerBasis": "O campo deve ser representado como um único atributo atômico e conjunto, pois as regras de negócio indicam que o dado será manipulado apenas como um bloco único de texto, sem necessidade de consultas parciais."
  },
  {
    "id": 21,
    "sourcePage": 22,
    "source": "Revisão B1.pdf",
    "module": 2,
    "moduleTitle": "Modelo Entidade-Relacionamento (MER/DER)",
    "relatedModules": [
      2
    ],
    "topic": "atributo composto conforme requisito",
    "type": "multiple-choice",
    "question": "Durante o levantamento de requisitos para um sistema corporativo de recursos humanos de uma grande empresa, especificou-se que o nome completo dos colaboradores precisa ser manipulado de forma granular, permitindo que o sistema realize ordenações por sobrenome, buscas específicas pelo primeiro nome e relatórios formais segmentados. Considerando a análise dos requisitos para a definição dos atributos, assinale a alternativa que indica a forma adequada de modelar esse campo.",
    "options": {
      "A": "O campo deve ser representado como um único atributo atômico e conjunto, pois as regras de negócio indicam que o dado será manipulado apenas como um bloco único de texto, sem necessidade de consultas parciais",
      "B": "O campo deve ser obrigatoriamente dividido em múltiplos atributos separados, pois as regras de negócio exigem consultas, ordenações e manipulações independentes de suas partes componentes.",
      "C": "O sistema deve ignorar o uso de atributos textuais, substituindo qualquer campo de identificação por chaves numéricas geradas aleatoriamente por hardware",
      "D": "A modelagem conceitual exige que qualquer dado descritivo seja transformado em uma entidade fraca independente, independentemente dos requisitos do sistema",
      "E": "Os dados textuais devem ser descartados do banco de dados relacional e armazenados exclusivamente em arquivos de texto locais sem estrutura"
    },
    "answer": "B",
    "scored": true,
    "sourceStatus": "ok",
    "note": "",
    "answerBasis": "O campo deve ser obrigatoriamente dividido em múltiplos atributos separados, pois as regras de negócio exigem consultas, ordenações e manipulações independentes de suas partes componentes."
  },
  {
    "id": 22,
    "sourcePage": 23,
    "source": "Revisão B1.pdf",
    "module": 2,
    "moduleTitle": "Modelo Entidade-Relacionamento (MER/DER)",
    "relatedModules": [
      2
    ],
    "topic": "atributo derivado - idade",
    "type": "multiple-choice",
    "question": "Durante a modelagem conceitual de um sistema de gestão de pessoas para uma instituição educacional, surgiu uma discussão entre os projetistas sobre como registrar a idade dos alunos: alguns defendiam criar um atributo físico chamado \"idade\" na tabela para facilitar consultas rápidas, enquanto outros argumentavam que o correto seria armazenar apenas a \"data de nascimento\" e calcular a idade dinamicamente quando necessário, tratando a idade como um atributo derivado. Com base nos conceitos fundamentais de modelagem de dados e nas boas práticas de projeto, assinale a alternativa correta que define a modelagem adequada e sua justificativa.",
    "options": {
      "A": "Deve-se armazenar a data de nascimento e tratar a idade como um atributo derivado, pois armazenar a idade estaticamente gera inconsistências com o passar do tempo, exigindo atualizações diárias desnecessárias na base de dados.",
      "B": "O campo idade deve ser gravado obrigatoriamente como um atributo fixo e independente, pois os bancos de dados relacionais proíbem qualquer tipo de cálculo matemático em tempo de execução",
      "C": "A modelagem conceitual exige que todas as informações temporais sejam apagadas e substituídas por arquivos de texto locais para economizar espaço em disco",
      "D": "A idade e a data de nascimento devem ser transformadas em tabelas isoladas ligadas a chaves estrangeiras sem restrição de integridade",
      "E": "O sistema deve ignorar o cadastro de datas, aceitando apenas idades aproximadas informadas por meio de arquivos de log voláteis"
    },
    "answer": "A",
    "scored": true,
    "sourceStatus": "ok",
    "note": "",
    "answerBasis": "Deve-se armazenar a data de nascimento e tratar a idade como um atributo derivado, pois armazenar a idade estaticamente gera inconsistências com o passar do tempo, exigindo atualizações diárias desnecessárias na base de dados."
  },
  {
    "id": 23,
    "sourcePage": 24,
    "source": "Revisão B1.pdf",
    "module": 2,
    "moduleTitle": "Modelo Entidade-Relacionamento (MER/DER)",
    "relatedModules": [
      2
    ],
    "topic": "atributo histórico vs derivado",
    "type": "multiple-choice",
    "question": "Durante a modelagem conceitual para um sistema de controle de imunização e campanhas de vacinação, os projetistas discutiram a necessidade de registrar a idade em que o paciente tomou cada vacina no seu histórico de doses aplicadas. Como o sistema armazena apenas o cadastro básico do paciente (incluindo sua data de nascimento) e o registro das vacinas tomadas ao longo dos anos, mas sem obrigatoriedade de salvar a data exata em que cada dose ocorreu, surgiu a dúvida sobre a necessidade ou não de criar um campo físico de idade na tabela de doses. Com base nas boas práticas de modelagem e análise de requisitos, assinale a alternativa correta que define a abordagem ideal para este cenário.",
    "options": {
      "A": "O atributo de idade deve ser armazenado de forma física e estática no registro da aplicação da vacina, pois, como a data exata da dose não é gravada no sistema, torna-se impossível derivá-la futuramente apenas pela data de nascimento, exigindo o armazenamento explícito desse dado histórico.",
      "B": "O campo de idade deve ser proibido e descartado do sistema, obrigando o banco de dados a calcular dinamicamente a idade da dose por meio de fórmulas matemáticas baseadas em datas que não existem na tabela de aplicação",
      "C": "A modelagem conceitual determina que qualquer dado numérico relacionado a tempo seja substituído por arquivos de texto locais, eliminando o uso de colunas no SGBD",
      "D": "O sistema deve apagar automaticamente o histórico de vacinas e converter a idade em uma chave primária estrangeira sem restrições",
      "E": "A idade deve ser tratada estritamente como um atributo derivado calculado em tempo de execução através de scripts externos de hardware, mesmo na ausência de datas de referência"
    },
    "answer": "A",
    "scored": true,
    "sourceStatus": "ok",
    "note": "",
    "answerBasis": "O atributo de idade deve ser armazenado de forma física e estática no registro da aplicação da vacina, pois, como a data exata da dose não é gravada no sistema, torna-se impossível derivá-la futuramente apenas pela data de nascimento, exigindo o armazenamento explícito desse dado histórico."
  },
  {
    "id": 24,
    "sourcePage": 25,
    "source": "Revisão B1.pdf",
    "module": 3,
    "moduleTitle": "Modelo Relacional e Normalização",
    "relatedModules": [
      1,
      3
    ],
    "topic": "tupla, atributo e domínio",
    "type": "multiple-choice",
    "question": "No modelo de dados relacional, introduzido formalmente por Ted Codd, a estrutura básica utilizada para armazenar e organizar os dados de um sistema é a relação, que pode ser compreendida de forma informal como uma tabela de valores composta por linhas e colunas. No contexto da terminologia formal do modelo relacional, analise os conceitos a seguir e assinale a alternativa que relaciona corretamente os elementos estruturais com suas respectivas definições.",
    "options": {
      "A": "A tupla representa o cabeçalho de uma coluna na tabela; o atributo corresponde a cada linha de dados; e o domínio define o tipo de dado atômico permitido em cada coluna",
      "B": "O domínio representa o conjunto de todas as tabelas do banco de dados; a tupla é a relação entre duas entidades distintas; e o atributo é a chave primária obrigatória",
      "C": "A tupla refere-se a cada linha (registro) de uma tabela; o atributo é o cabeçalho (nome da coluna); e o domínio define o conjunto de valores atômicos válidos que podem aparecer em cada coluna da relação.",
      "D": "A relação é uma estrutura de texto livre sem colunas definidas; o atributo é a restrição de chave estrangeira; e a tupla é a representação física do arquivo em disco",
      "E": "O domínio é a entidade conceitual do DER; a tupla é o relacionamento N para N; e o atributo é a chave candidata do sistema"
    },
    "answer": "C",
    "scored": true,
    "sourceStatus": "ok",
    "note": "",
    "answerBasis": "A tupla refere-se a cada linha (registro) de uma tabela; o atributo é o cabeçalho (nome da coluna); e o domínio define o conjunto de valores atômicos válidos que podem aparecer em cada coluna da relação."
  },
  {
    "id": 25,
    "sourcePage": 26,
    "source": "Revisão B1.pdf",
    "module": 3,
    "moduleTitle": "Modelo Relacional e Normalização",
    "relatedModules": [
      2,
      3
    ],
    "topic": "mapeamento de entidade fraca",
    "type": "multiple-choice",
    "question": "No estudo de modelagem conceitual e projeto de bancos de dados relacionais, o conceito de dependência de existência diferencia as entidades fortes (dominantes) das entidades fracas (subordinadas). Uma entidade fraca é aquela cuja existência depende de uma entidade forte e cuja identificação exige a composição da chave primária da entidade proprietária com o seu próprio identificador (chave parcial). Considerando os fundamentos de entidades fortes e fracas e as regras para o seu mapeamento para o modelo relacional, assinale a alternativa correta.",
    "options": {
      "A": "A entidade fraca possui independência total de existência e sua chave primária é gerada de forma completamente isolada, sem qualquer vínculo com a entidade dominante",
      "B": "Para mapear uma entidade fraca para o modelo relacional, cria-se uma relação incluindo seus atributos simples e incorporando como chave estrangeira os atributos da chave primária da relação proprietária correspondente.",
      "C": "Entidades fortes e fracas utilizam exatamente a mesma regra de mapeamento, sendo proibido o uso de chaves estrangeiras para associá-las no banco de dados relacional",
      "D": "A entidade fraca serve apenas como um arquivo de texto volátil externo e não pode ser convertida em uma tabela ou relação no SGBD relacional",
      "E": "O conceito de entidade fraca refere-se exclusivamente aos atributos compostos de uma tabela, dispensando qualquer tipo de relacionamento com entidades dominantes"
    },
    "answer": "B",
    "scored": true,
    "sourceStatus": "ok",
    "note": "",
    "answerBasis": "Para mapear uma entidade fraca para o modelo relacional, cria-se uma relação incluindo seus atributos simples e incorporando como chave estrangeira os atributos da chave primária da relação proprietária correspondente."
  },
  {
    "id": 26,
    "sourcePage": 27,
    "source": "Revisão B1.pdf",
    "module": 3,
    "moduleTitle": "Modelo Relacional e Normalização",
    "relatedModules": [
      2,
      3
    ],
    "topic": "mapeamento de entidades fortes",
    "type": "multiple-choice",
    "question": "Em um projeto de banco de dados relacional para uma livraria, o modelador precisa mapear duas entidades fortes e independentes: Editora (com os atributos Código e Nome) e Livro (com os atributos ISBN e Título), que mantêm entre si uma associação comercial. Com base nas regras formais de mapeamento do modelo conceitual para o modelo relacional (especificamente para entidades regulares), assinale a alternativa que descreve corretamente a estrutura relacional resultante para esse cenário.",
    "options": {
      "A": "Deve-se criar duas relações distintas, onde cada entidade forte gera uma tabela própria contendo todos os seus atributos simples, e a associação entre elas é resolvida conforme a cardinalidade por meio da propagação da chave primária como chave estrangeira.",
      "B": "A modelagem correta exige que a Editora e o Livro sejam fundidos obrigatoriamente em uma única tabela que repete o nome da editora em todas as linhas de livros, eliminando chaves primárias",
      "C": "As entidades fortes devem ser convertidas em arquivos de texto locais, enquanto o relacionamento entre elas é mantido apenas na memória volátil do SGBD",
      "D": "Deve-se criar uma única relação para o Livro e transformar a Editora em um atributo composto sem chave de identificação própria",
      "E": "O mapeamento exige que a chave primária da Editora seja descartada e substituída por uma entidade fraca dependente de dados externos"
    },
    "answer": "A",
    "scored": true,
    "sourceStatus": "ok",
    "note": "",
    "answerBasis": "Deve-se criar duas relações distintas, onde cada entidade forte gera uma tabela própria contendo todos os seus atributos simples, e a associação entre elas é resolvida conforme a cardinalidade por meio da propagação da chave primária como chave estrangeira."
  },
  {
    "id": 27,
    "sourcePage": 28,
    "source": "Revisão B1.pdf",
    "module": 3,
    "moduleTitle": "Modelo Relacional e Normalização",
    "relatedModules": [
      2,
      3
    ],
    "topic": "mapeamento de entidade fraca e chave composta",
    "type": "multiple-choice",
    "question": "Em um projeto de banco de dados relacional para uma empresa de médio porte, o modelador precisa mapear uma entidade fraca chamada Dependente, que depende estruturalmente de sua entidade proprietária forte Funcionário (com chave primária CPF_Funcionario). No sistema, um funcionário pode possuir vários dependentes, mas um dependente só existe associado a um funcionário específico, utilizando uma chave parcial (Numero_Dependente) para se diferenciar dos demais dependentes do mesmo colaborador. Com base nas regras formais de mapeamento do modelo conceitual para o modelo relacional aplicadas a entidades fracas, assinale a alternativa que descreve corretamente a estrutura relacional resultante para esse cenário.",
    "options": {
      "A": "Deve-se criar uma relação distinta para a entidade fraca Dependente, incluindo todos os seus atributos simples e sua chave parcial, além de incorporar como chave estrangeira a chave primária da relação proprietária (Funcionário), sendo a chave primária da tabela de dependentes composta por essa chave estrangeira somada à chave parcial.",
      "B": "A entidade fraca deve ser convertida em uma tabela totalmente isolada que possui independência de existência, sem conter nenhum vínculo ou chave estrangeira para a entidade proprietária",
      "C": "O mapeamento exige que a entidade fraca seja eliminada do banco de dados relacional e seus dados sejam migrados permanentemente para arquivos de texto locais sem suporte a chaves",
      "D": "A entidade fraca e a entidade forte devem ser unificadas em uma única relação plana que repete os dados do funcionário para cada dependente sem restrição de integridade",
      "E": "Os dependentes devem ser transformados em atributos derivados calculados dinamicamente por hardware, dispensando a criação de qualquer tabela no SGBD"
    },
    "answer": "A",
    "scored": true,
    "sourceStatus": "ok",
    "note": "",
    "answerBasis": "Deve-se criar uma relação distinta para a entidade fraca Dependente, incluindo todos os seus atributos simples e sua chave parcial, além de incorporar como chave estrangeira a chave primária da relação proprietária (Funcionário), sendo a chave primária da tabela de dependentes composta por essa chave estrangeira somada à chave parcial."
  },
  {
    "id": 28,
    "sourcePage": 29,
    "source": "Revisão B1.pdf",
    "module": 1,
    "moduleTitle": "Conceitos e Ciclo de Vida do Banco de Dados",
    "relatedModules": [
      1,
      3
    ],
    "topic": "modelo conceitual, lógico e físico",
    "type": "multiple-choice",
    "question": "Durante o ciclo de desenvolvimento de um sistema corporativo de grande porte, a equipe de engenharia de software dividiu o projeto de banco de dados em etapas distintas de abstração, passando pela definição inicial das regras de negócio do mundo real, pela estruturação em tabelas e chaves, até chegar aos ajustes finais de desempenho e armazenamento voltados para um SGBD específico. Com base nos conceitos clássicos de modelagem conceitual, lógica e física, assinale a alternativa que descreve corretamente as características e o escopo de cada um desses três níveis de projeto.",
    "options": {
      "A": "O modelo conceitual representa a visão de alto nível focada nas regras de negócio e entidades (como o DER) sem se prender a SGBD; o modelo lógico traduz esses conceitos para estruturas tabulares (tabelas, colunas, chaves primárias e estrangeiras) independentes de SGBD específico; e o modelo físico detalha a implementação otimizada para um SGBD particular, definindo índices, tipos de dados de armazenamento e organização em disco.",
      "B": "O modelo físico é responsável por desenhar as entidades abstratas do mundo real sem nenhuma preocupação com o SGBD, enquanto o modelo conceitual define os índices de hardware e otimização de disco",
      "C": "Os três níveis de modelagem são idênticos e intercambiáveis, permitindo que a criação de arquivos de índice físico seja feita diretamente na fase de levantamento conceitual de requisitos",
      "D": "O modelo lógico obriga o projetista a utilizar arquivos de texto locais estruturados sem tabelas relacionais, ao passo que o modelo físico elimina totalmente a necessidade de chaves primárias",
      "E": "A modelagem conceitual depende exclusivamente do tipo de SGBD comercial escolhido, ao passo que a modelagem física abstrai completamente os conceitos de desempenho e armazenamento"
    },
    "answer": "A",
    "scored": true,
    "sourceStatus": "ok",
    "note": "",
    "answerBasis": "O modelo conceitual representa a visão de alto nível focada nas regras de negócio e entidades (como o DER) sem se prender a SGBD; o modelo lógico traduz esses conceitos para estruturas tabulares (tabelas, colunas, chaves primárias e estrangeiras) independentes de SGBD específico; e o modelo físico detalha a implementação otimizada para um SGBD particular, definindo índices, tipos de dados de armazenamento e organização em disco."
  },
  {
    "id": 29,
    "sourcePage": 30,
    "source": "Revisão B1.pdf",
    "module": 2,
    "moduleTitle": "Modelo Entidade-Relacionamento (MER/DER)",
    "relatedModules": [
      2
    ],
    "topic": "conceito de entidade",
    "type": "multiple-choice",
    "question": "No contexto do Modelo Entidade-Relacionamento (MER), os conceitos fundamentais estruturam a abstração de dados do mundo real. Com base estritamente na definição conceitual de entidade apresentada nos fundamentos da modelagem, assinale a alternativa correta.",
    "options": {
      "A": "Uma entidade representa uma \"coisa\" ou um \"objeto\" do mundo real que pode ser identificado de forma unívoca em relação a todos os outros objetos, possuindo um conjunto de propriedades.",
      "B": "A entidade é sinônimo de chave estrangeira e restringe exclusivamente os domínios de texto livre em um SGBD relacional",
      "C": "O conjunto de entidades refere-se unicamente ao código físico de otimização de índices em disco e arquivos binários de hardware",
      "D": "Uma entidade é um operador matemático restrito a cálculos temporais dinâmicos em tempo de execução sem atributos descritivos",
      "E": "O conceito de entidade restringe-se aos comandos de manipulação de dados DML como Insert, Update e Delete em tabelas abertas"
    },
    "answer": "A",
    "scored": true,
    "sourceStatus": "ok",
    "note": "",
    "answerBasis": "Uma entidade representa uma \"coisa\" ou um \"objeto\" do mundo real que pode ser identificado de forma unívoca em relação a todos os outros objetos, possuindo um conjunto de propriedades."
  },
  {
    "id": 30,
    "sourcePage": 31,
    "source": "Revisão B1.pdf",
    "module": 2,
    "moduleTitle": "Modelo Entidade-Relacionamento (MER/DER)",
    "relatedModules": [
      2
    ],
    "topic": "conceito de relacionamento",
    "type": "multiple-choice",
    "question": "No contexto do Modelo Entidade-Relacionamento (MER), além das entidades e dos atributos, o terceiro pilar fundamental dos conceitos básicos descritos na modelagem conceitual corresponde aos relacionamentos. Com base na teoria de modelagem de dados, assinale a alternativa correta que define o conceito de relacionamento.",
    "options": {
      "A": "Um relacionamento é uma associação lógica que ocorre entre duas ou mais entidades, representando como elas interagem entre si no mundo real.",
      "B": "O relacionamento refere-se exclusivamente à restrição física de chave primária em tabelas relacionais semânticas",
      "C": "Um relacionamento substitui a necessidade de chaves estrangeiras por meio de arquivos de texto locais isolados",
      "D": "O conceito de relacionamento restringe-se aos cálculos dinâmicos de atributos derivados em tempo de execução",
      "E": "Relacionamento é a tabela física de conversão utilizada unicamente para otimização de hardware em SGBDs NoSQL"
    },
    "answer": "A",
    "scored": true,
    "sourceStatus": "ok",
    "note": "",
    "answerBasis": "Um relacionamento é uma associação lógica que ocorre entre duas ou mais entidades, representando como elas interagem entre si no mundo real."
  },
  {
    "id": 31,
    "sourcePage": 32,
    "source": "Revisão B1.pdf",
    "module": 2,
    "moduleTitle": "Modelo Entidade-Relacionamento (MER/DER)",
    "relatedModules": [
      2
    ],
    "topic": "conceito de atributo",
    "type": "multiple-choice",
    "question": "No Modelo Entidade-Relacionamento (MER), os objetos do mundo real precisam ser descritos por meio de propriedades que detalham suas características individuais. Com base nos conceitos fundamentais da modelagem conceitual, analise as alternativas abaixo sobre atributos e assinale a que descreve corretamente o seu papel:",
    "options": {
      "A": "Os atributos representam as restrições físicas de hardware e arquivos de log executados pelo SGBD relacional",
      "B": "Os atributos correspondem às propriedades descritivas que caracterizam cada entidade ou conjunto de entidades no modelo conceitual.",
      "C": "Os atributos são os comandos de manipulação de dados utilizados exclusivamente para apagar registros em disco",
      "D": "Os atributos substituem por completo a necessidade de chaves primárias e estrangeiras em qualquer banco de dados NoSQL",
      "E": "Os atributos representam as tabelas temporárias criadas em memória volátil durante a execução de consultas complexas"
    },
    "answer": "B",
    "scored": true,
    "sourceStatus": "ok",
    "note": "",
    "answerBasis": "Os atributos correspondem às propriedades descritivas que caracterizam cada entidade ou conjunto de entidades no modelo conceitual."
  },
  {
    "id": 32,
    "sourcePage": 33,
    "source": "Revisão B1.pdf",
    "module": 2,
    "moduleTitle": "Modelo Entidade-Relacionamento (MER/DER)",
    "relatedModules": [
      2
    ],
    "topic": "atributo simples vs composto",
    "type": "multiple-choice",
    "question": "No Modelo Entidade-Relacionamento (MER), os atributos descritivos que caracterizam as entidades podem ser classificados de acordo com a sua estrutura e capacidade de divisão em partes menores. Considerando os conceitos de atributos simples e compostos, analise as alternativas abaixo e assinale a que descreve corretamente essa classificação:",
    "options": {
      "A": "Os atributos compostos são aqueles que não podem ser divididos em subpartes e contêm sempre um valor único, enquanto os atributos simples possuem múltiplos valores armazenados em uma única coluna sem separação lógica",
      "B": "Os atributos simples são aqueles que não podem ser divididos em subpartes e possuem um único valor atômico para cada ocorrência, enquanto os atributos compostos podem ser subdivididos em partes menores que possuem significado próprio, como o atributo Endereço dividido em Rua, Número e Bairro.",
      "C": "Os atributos compostos correspondem obrigatoriamente às chaves primárias de tabelas relacionais físicas, enquanto os atributos simples representam arquivos de log em disco",
      "D": "Os atributos simples são utilizados exclusivamente para armazenar cálculos matemáticos em tempo de execução, dispensando qualquer subdivisão conceitual",
      "E": "Os atributos compostos substituem a necessidade de entidades fracas no DER, sendo proibidos na modelagem conceitual moderna"
    },
    "answer": "B",
    "scored": true,
    "sourceStatus": "ok",
    "note": "",
    "answerBasis": "Os atributos simples são aqueles que não podem ser divididos em subpartes e possuem um único valor atômico para cada ocorrência, enquanto os atributos compostos podem ser subdivididos em partes menores que possuem significado próprio, como o atributo Endereço dividido em Rua, Número e Bairro."
  },
  {
    "id": 33,
    "sourcePage": 34,
    "source": "Revisão B1.pdf",
    "module": 2,
    "moduleTitle": "Modelo Entidade-Relacionamento (MER/DER)",
    "relatedModules": [
      2
    ],
    "topic": "monovalorado vs multivalorado",
    "type": "multiple-choice",
    "question": "Com base nas definições formais da modelagem conceitual, analise as alternativas abaixo e assinale a correta:",
    "options": {
      "A": "Os atributos monovalorados são aqueles que podem ter apenas um valor para uma dada entidade, enquanto os atributos multivalorados podem ter mais de um valor, como o campo número_de_telefone de uma pessoa que pode possuir vários telefones cadastrados.",
      "B": "Os atributos multivalorados são restritos exclusivamente a chaves primárias compostas em tabelas físicas de SGBD NoSQL",
      "C": "Os atributos monovalorados correspondem aos arquivos de log em disco e não podem ser representados graficamente no DER",
      "D": "Os atributos multivalorados substituem por completo a necessidade de entidades fracas na modelagem conceitual de sistemas",
      "E": "Os atributos monovalorados representam cálculos dinâmicos em tempo de execução sem armazenamento físico"
    },
    "answer": "A",
    "scored": true,
    "sourceStatus": "ok",
    "note": "",
    "answerBasis": "Os atributos monovalorados são aqueles que podem ter apenas um valor para uma dada entidade, enquanto os atributos multivalorados podem ter mais de um valor, como o campo número_de_telefone de uma pessoa que pode possuir vários telefones cadastrados."
  },
  {
    "id": 34,
    "sourcePage": 35,
    "source": "Revisão B1.pdf",
    "module": 2,
    "moduleTitle": "Modelo Entidade-Relacionamento (MER/DER)",
    "relatedModules": [
      2
    ],
    "topic": "atributo derivado",
    "type": "multiple-choice",
    "question": "No contexto do Modelo Entidade-Relacionamento (MER), os atributos podem apresentar diferentes naturezas quanto à forma como seus dados são obtidos ou armazenados no sistema. Com base na definição conceitual de atributos derivados (atributos derivados também são amplamente conhecidos na literatura de banco de dados como atributos calculados), analise as alternativas abaixo e assinale a correta:",
    "options": {
      "A": "Os atributos derivados são aqueles cujos valores podem ser calculados ou obtidos a partir de outros atributos ou dados já armazenados, como o cálculo da idade obtido por meio da data de nascimento.",
      "B": "Os atributos derivados correspondem exclusivamente às chaves primárias compostas de entidades fracas",
      "C": "Os atributos derivados são arquivos de texto locais criados para armazenar logs de auditoria do sistema",
      "D": "Os atributos derivados substituem a necessidade de relacionamentos do tipo N:N na modelagem conceitual",
      "E": "Os atributos derivados representam tabelas temporárias geradas em memória RAM sem nenhuma relação com o DER"
    },
    "answer": "A",
    "scored": true,
    "sourceStatus": "ok",
    "note": "",
    "answerBasis": "Os atributos derivados são aqueles cujos valores podem ser calculados ou obtidos a partir de outros atributos ou dados já armazenados, como o cálculo da idade obtido por meio da data de nascimento."
  },
  {
    "id": 35,
    "sourcePage": 36,
    "source": "Revisão B1.pdf",
    "module": 2,
    "moduleTitle": "Modelo Entidade-Relacionamento (MER/DER)",
    "relatedModules": [
      2
    ],
    "topic": "relacionamentos",
    "type": "multiple-choice",
    "question": "No contexto do Modelo Entidade-Relacionamento (MER), os relacionamentos desempenham um papel fundamental ao conectar os elementos estruturais do sistema. Considerando os conceitos conceituais sobre relacionamentos, analise as alternativas abaixo e assinale a correta:",
    "options": {
      "A": "Os relacionamentos representam as associações ou interconexões lógicas que ocorrem entre duas ou mais entidades, definindo como elas interagem entre si no mundo real.",
      "B": "Os relacionamentos correspondem obrigatoriamente às chaves primárias físicas de uma única tabela semântica isolada",
      "C": "Os relacionamentos substituem por completo a necessidade de atributos descritivos e chaves estrangeiras em qualquer SGBD NoSQL",
      "D": "Os relacionamentos são comandos de manipulação de dados (DML) utilizados para apagar registros diretamente no disco rígido",
      "E": "Os relacionamentos representam tabelas temporárias geradas em memória RAM volátil durante a execução de funções matemáticas sem vínculo com entidades"
    },
    "answer": "A",
    "scored": true,
    "sourceStatus": "ok",
    "note": "",
    "answerBasis": "Os relacionamentos representam as associações ou interconexões lógicas que ocorrem entre duas ou mais entidades, definindo como elas interagem entre si no mundo real."
  },
  {
    "id": 36,
    "sourcePage": 37,
    "source": "Revisão B1.pdf",
    "module": 2,
    "moduleTitle": "Modelo Entidade-Relacionamento (MER/DER)",
    "relatedModules": [
      2
    ],
    "topic": "atributo-chave",
    "type": "multiple-choice",
    "question": "No projeto conceitual de um banco de dados utilizando o Modelo Entidade-Relacionamento (MER), a identificação unívoca das instâncias de uma entidade é um requisito fundamental para garantir a integridade dos dados. Com base na definição de atributo chave (chave primária), analise as alternativas abaixo e assinale a correta:",
    "options": {
      "A": "A) O atributo chave é aquele cujos valores identificam de forma única cada ocorrência ou tupla individual de um conjunto de entidades, não podendo possuir valores duplicados para instâncias distintas.",
      "B": "B) O atributo chave serve exclusivamente para armazenar múltiplos valores de texto livre que se repetem em todas as linhas da tabela",
      "C": "C) O atributo chave corresponde a um cálculo dinâmico executado em memória volátil que altera seu valor a cada consulta realizada",
      "D": "D) O atributo chave substitui a necessidade de relacionamentos do tipo N:N por meio de arquivos de log em disco",
      "E": "E) O atributo chave restringe-se aos comandos de manipulação de dados (DML) de exclusão de registros em SGBDs NoSQL"
    },
    "answer": "A",
    "scored": true,
    "sourceStatus": "ok",
    "note": "",
    "answerBasis": "A) O atributo chave é aquele cujos valores identificam de forma única cada ocorrência ou tupla individual de um conjunto de entidades, não podendo possuir valores duplicados para instâncias distintas."
  },
  {
    "id": 37,
    "sourcePage": 38,
    "source": "Revisão B1.pdf",
    "module": 2,
    "moduleTitle": "Modelo Entidade-Relacionamento (MER/DER)",
    "relatedModules": [
      2
    ],
    "topic": "superchave",
    "type": "multiple-choice",
    "question": "No contexto de projeto de banco de dados e da teoria do modelo relacional, o conceito de superchave desempenha um papel fundamental na identificação de tuplas. Com base na definição formal de superchave, analise as alternativas abaixo e assinale a correta:",
    "options": {
      "A": "A) Uma superchave é um conjunto de um ou mais atributos que, tomada coletivamente, permite identificar de forma única uma tupla em uma relação, podendo conter atributos em excesso além dos estritamente necessários para a unicidade.",
      "B": "B) A superchave é uma tabela temporária utilizada exclusivamente para armazenar logs de auditoria e exclusão em SGBDs NoSQL",
      "C": "C) Uma superchave corresponde a um cálculo dinâmico de atributos derivados executados em memória volátil durante consultas analíticas",
      "D": "D) A superchave substitui por completo a necessidade de chaves estrangeiras em relacionamentos de cardinalidade N para N",
      "E": "E) O conceito de superchave restringe-se aos comandos de manipulação de dados (DML) de inserção e atualização de registros em disco"
    },
    "answer": "A",
    "scored": true,
    "sourceStatus": "ok",
    "note": "",
    "answerBasis": "A) Uma superchave é um conjunto de um ou mais atributos que, tomada coletivamente, permite identificar de forma única uma tupla em uma relação, podendo conter atributos em excesso além dos estritamente necessários para a unicidade."
  },
  {
    "id": 38,
    "sourcePage": 39,
    "source": "Revisão B1.pdf",
    "module": 2,
    "moduleTitle": "Modelo Entidade-Relacionamento (MER/DER)",
    "relatedModules": [
      2
    ],
    "topic": "conceito de DER",
    "type": "multiple-choice",
    "question": "No contexto de modelagem de dados e projeto conceitual, o Diagrama de Entidade-Relacionamento (DER) cumpre um papel central. Com base nos fundamentos teóricos da modelagem conceitual, analise as alternativas abaixo e assinale a que define corretamente o que é o DER:",
    "options": {
      "A": "O Diagrama de Entidade-Relacionamento (DER) é a representação gráfica de um modelo entidade-relacionamento, servindo como uma ferramenta de comunicação visual que ilustra as entidades, os atributos e os relacionamentos de um sistema.",
      "B": "O DER é um script de comandos DDL utilizado exclusivamente para criar tabelas físicas e índices otimizados em disco rígido",
      "C": "O Diagrama de Entidade-Relacionamento corresponde a um conjunto de arquivos de log e auditoria gerados de forma automática em bancos de dados NoSQL",
      "D": "O DER é um operador matemático restrito ao cálculo dinâmico de atributos derivados em memória volátil",
      "E": "O Diagrama de Entidade-Relacionamento substitui por completo a necessidade de chaves primárias e estrangeiras no projeto lógico de um SGBD"
    },
    "answer": "A",
    "scored": true,
    "sourceStatus": "ok",
    "note": "",
    "answerBasis": "O Diagrama de Entidade-Relacionamento (DER) é a representação gráfica de um modelo entidade-relacionamento, servindo como uma ferramenta de comunicação visual que ilustra as entidades, os atributos e os relacionamentos de um sistema."
  },
  {
    "id": 39,
    "sourcePage": 40,
    "source": "Revisão B1.pdf",
    "module": 2,
    "moduleTitle": "Modelo Entidade-Relacionamento (MER/DER)",
    "relatedModules": [
      2
    ],
    "topic": "importância do DER",
    "type": "multiple-choice",
    "question": "O Diagrama de Entidade-Relacionamento (DER) é uma etapa essencial na fase de projeto conceitual de um sistema de banco de dados, servindo como uma modelagem semântica voltada para a representação do mundo real. Considerando a importância de se construir o DER antes de iniciar a implementação física e os riscos associados a pular essa etapa de modelagem, analise as alternativas abaixo e assinale a correta:",
    "options": {
      "A": "A construção do DER é fundamental para garantir a abstração correta das regras de negócio, a comunicação clara com os analistas e a prevenção de inconsistências estruturais graves, evitando que o sistema seja implementado sem planejamento lógico e sofra com falhas de integridade e redundâncias excessivas.",
      "B": "O DER serve exclusivamente para documentar tabelas já criadas em disco por meio de engenharia reversa de código C++, sendo dispensável em projetos novos",
      "C": "Pular a construção do DER traz a vantagem de acelerar a codificação física no SGBD, garantindo que o banco de dados NoSQL funcione sem chaves ou restrições de integridade",
      "D": "O DER é um artefato obsoleto substituído inteiramente pelos comandos DML da linguagem SQL em tempo de execução",
      "E": "A ausência do DER garante a otimização automática de hardware e o isolamento de logs sem impacto na semântica dos dados"
    },
    "answer": "A",
    "scored": true,
    "sourceStatus": "ok",
    "note": "",
    "answerBasis": "A construção do DER é fundamental para garantir a abstração correta das regras de negócio, a comunicação clara com os analistas e a prevenção de inconsistências estruturais graves, evitando que o sistema seja implementado sem planejamento lógico e sofra com falhas de integridade e redundâncias excessivas."
  },
  {
    "id": 40,
    "sourcePage": 41,
    "source": "Revisão B1.pdf",
    "module": 2,
    "moduleTitle": "Modelo Entidade-Relacionamento (MER/DER)",
    "relatedModules": [
      2
    ],
    "topic": "notação de entidade forte e fraca",
    "type": "multiple-choice",
    "question": "No Diagrama de Entidade-Relacionamento (DER), a notação visual padronizada diferencia os tipos de entidades para facilitar a leitura e a interpretação do projeto conceitual. Com base na representação gráfica clássica da modelagem conceitual, analise as alternativas abaixo e assinale a correta sobre como são desenhadas a entidade forte e a entidade fraca:",
    "options": {
      "A": "A entidade forte é representada graficamente por um retângulo simples, enquanto a entidade fraca é representada por um retângulo duplo.",
      "B": "A entidade forte é representada por uma elipse tracejada e a entidade fraca por um losango preenchido",
      "C": "A entidade forte corresponde a uma linha pontilhada sem preenchimento e a fraca a uma tabela física relacional",
      "D": "A entidade forte é representada por um círculo duplo e a entidade fraca por um quadrado simples de borda fina",
      "E": "A entidade forte e a entidade fraca utilizam exatamente a mesma representação de losango sem nenhuma distinção visual"
    },
    "answer": "A",
    "scored": true,
    "sourceStatus": "ok",
    "note": "",
    "answerBasis": "A entidade forte é representada graficamente por um retângulo simples, enquanto a entidade fraca é representada por um retângulo duplo."
  },
  {
    "id": 41,
    "sourcePage": 42,
    "source": "Revisão B1.pdf",
    "module": 2,
    "moduleTitle": "Modelo Entidade-Relacionamento (MER/DER)",
    "relatedModules": [
      2
    ],
    "topic": "notação de atributos no DER",
    "type": "multiple-choice",
    "question": "No Diagrama de Entidade-Relacionamento (DER), os atributos e suas variações estruturais possuem convenções gráficas próprias para a sua identificação visual. Com base na simbologia padrão do modelo conceitual, analise as alternativas abaixo e assinale a correta sobre a representação dos atributos:",
    "options": {
      "A": "Os atributos são representados graficamente por elipses ligadas por linhas às suas respectivas entidades, sendo o atributo chave identificado por texto sublinhado e o atributo composto ramificado em sub-elipses adicionais.",
      "B": "Os atributos são representados exclusivamente por retângulos duplos idênticos aos das entidades fracas",
      "C": "Os atributos representam tabelas físicas de disco em formato de losango sem qualquer ligação visual com as entidades",
      "D": "Os atributos compostos são desenhados como linhas pontilhadas verticais sem nenhuma elipse associada",
      "E": "Os atributos chaves são representados por setas direcionais que substituem os relacionamentos binários"
    },
    "answer": "A",
    "scored": true,
    "sourceStatus": "ok",
    "note": "",
    "answerBasis": "Os atributos são representados graficamente por elipses ligadas por linhas às suas respectivas entidades, sendo o atributo chave identificado por texto sublinhado e o atributo composto ramificado em sub-elipses adicionais."
  },
  {
    "id": 42,
    "sourcePage": 43,
    "source": "Revisão B1.pdf",
    "module": 2,
    "moduleTitle": "Modelo Entidade-Relacionamento (MER/DER)",
    "relatedModules": [
      2
    ],
    "topic": "notação de relacionamento no DER",
    "type": "multiple-choice",
    "question": "No Diagrama de Entidade-Relacionamento (DER), a associação lógica existente entre duas ou mais entidades possui uma forma geométrica padronizada para a sua representação visual na modelagem conceitual. Com base nisso, analise as alternativas abaixo e assinale a correta que descreve como o relacionamento é representado graficamente:",
    "options": {
      "A": "O relacionamento é representado graficamente por um losango que se conecta por meio de linhas às entidades participantes.",
      "B": "O relacionamento é representado por um retângulo duplo idêntico a uma entidade fraca",
      "C": "O relacionamento é desenhado como uma elipse preenchida que substitui diretamente o atributo chave",
      "D": "O relacionamento corresponde a um círculo tracejado sem conexão lógica com as entidades",
      "E": "O relacionamento é representado por uma tabela física de disco rígido sem símbolo visual no DER"
    },
    "answer": "A",
    "scored": true,
    "sourceStatus": "ok",
    "note": "",
    "answerBasis": "O relacionamento é representado graficamente por um losango que se conecta por meio de linhas às entidades participantes."
  },
  {
    "id": 43,
    "sourcePage": 44,
    "source": "Revisão B1.pdf",
    "module": 2,
    "moduleTitle": "Modelo Entidade-Relacionamento (MER/DER)",
    "relatedModules": [
      2
    ],
    "topic": "notação de atributo composto",
    "type": "multiple-choice",
    "question": "No Diagrama de Entidade-Relacionamento (DER), a modelagem conceitual utiliza convenções gráficas específicas para descrever a estrutura interna dos atributos que podem ser subdivididos em partes menores. Com base nisso, analise as alternativas abaixo e assinale a correta sobre a representação gráfica do atributo composto:",
    "options": {
      "A": "O atributo composto é representado graficamente por uma elipse principal que se ramifica em outras elipses menores correspondentes aos seus subatributos componentes, como o atributo Endereço ligado a Rua, Número e Bairro.",
      "B": "O atributo composto é representado obrigatoriamente por um retângulo duplo idêntico a uma entidade fraca no DER",
      "C": "O atributo composto corresponde a um losango preenchido que substitui a necessidade de chaves primárias",
      "D": "O atributo composto é desenhado por meio de linhas pontilhadas verticais isoladas sem nenhuma elipse associada",
      "E": "O atributo composto utiliza uma elipse dupla concêntrica idêntica à representação de atributos multivalorados"
    },
    "answer": "A",
    "scored": true,
    "sourceStatus": "ok",
    "note": "",
    "answerBasis": "O atributo composto é representado graficamente por uma elipse principal que se ramifica em outras elipses menores correspondentes aos seus subatributos componentes, como o atributo Endereço ligado a Rua, Número e Bairro."
  },
  {
    "id": 44,
    "sourcePage": 45,
    "source": "Revisão B1.pdf",
    "module": 2,
    "moduleTitle": "Modelo Entidade-Relacionamento (MER/DER)",
    "relatedModules": [
      2
    ],
    "topic": "notação de atributo-chave",
    "type": "multiple-choice",
    "question": "No Diagrama de Entidade-Relacionamento (DER), a identificação visual dos campos que compõem a chave primária de uma entidade segue uma convenção gráfica padronizada. Analise as alternativas abaixo e assinale a correta sobre a representação gráfica do atributo chave no DER:",
    "options": {
      "A": "O atributo chave é representado por uma elipse cujos caracteres ou nome do atributo aparecem sublinhados.",
      "B": "O atributo chave é desenhado utilizando uma elipse dupla concêntrica idêntica ao atributo multivalorado",
      "C": "O atributo chave é representado obrigatoriamente por um retângulo preenchido na cor preta conectado ao losango",
      "D": "O atributo chave corresponde a uma linha pontilhada sem elipse associada que cruza o centro da entidade forte",
      "E": "O atributo chave utiliza uma elipse tracejada idêntica à representação de atributos derivados ou calculados"
    },
    "answer": "A",
    "scored": true,
    "sourceStatus": "ok",
    "note": "",
    "answerBasis": "O atributo chave é representado por uma elipse cujos caracteres ou nome do atributo aparecem sublinhados."
  },
  {
    "id": 45,
    "sourcePage": 46,
    "source": "Revisão B1.pdf",
    "module": 2,
    "moduleTitle": "Modelo Entidade-Relacionamento (MER/DER)",
    "relatedModules": [
      2
    ],
    "topic": "notação de atributo multivalorado",
    "type": "multiple-choice",
    "question": "No Diagrama de Entidade-Relacionamento (DER), a representação gráfica de um atributo que pode conter múltiplos valores para uma mesma ocorrência de entidade segue uma convenção visual específica. Analise as alternativas abaixo e assinale a correta sobre a representação gráfica do atributo multivalorado no DER:",
    "options": {
      "A": "O atributo multivalorado é representado graficamente por uma elipse dupla (duas elipses concêntricas) conectada à entidade.",
      "B": "O atributo multivalorado é desenhado por meio de um retângulo duplo idêntico a uma entidade fraca no DER",
      "C": "O atributo multivalorado corresponde a um losango preenchido que substitui a necessidade de chaves primárias",
      "D": "O atributo multivalorado utiliza linhas tracejadas verticais isoladas sem nenhuma elipse associada",
      "E": "O atributo multivalorado é representado por um círculo simples com o texto do nome totalmente sublinhado"
    },
    "answer": "A",
    "scored": true,
    "sourceStatus": "ok",
    "note": "",
    "answerBasis": "O atributo multivalorado é representado graficamente por uma elipse dupla (duas elipses concêntricas) conectada à entidade."
  },
  {
    "id": 46,
    "sourcePage": 47,
    "source": "Revisão B1.pdf",
    "module": 3,
    "moduleTitle": "Modelo Relacional e Normalização",
    "relatedModules": [
      3
    ],
    "topic": "objetivos da normalização",
    "type": "multiple-choice",
    "question": "No projeto de bases de dados relacionais, o processo de normalização é uma etapa crítica para a garantia da qualidade estrutural do sistema. Considerando os objetivos fundamentais da normalização, analise as alternativas abaixo e assinale a que indica corretamente a sua importância:",
    "options": {
      "A": "A normalização é importante porque visa estruturar as relações de modo a reduzir a redundância de dados e evitar anomalias de inserção, atualização e exclusão, garantindo maior integridade e consistência ao banco de dados.",
      "B": "A normalização serve exclusivamente para otimizar o hardware de servidores físicos através da compactação de arquivos de log em disco",
      "C": "O processo de normalização tem como principal finalidade substituir os relacionamentos do tipo N para N por tabelas temporárias em memória volátil",
      "D": "A importância da normalização reside na eliminação total da necessidade de chaves primárias e estrangeiras em SGBDs NoSQL",
      "E": "A normalização é utilizada unicamente para executar comandos DML de exclusão massiva de registros em tempo de execução"
    },
    "answer": "A",
    "scored": true,
    "sourceStatus": "ok",
    "note": "",
    "answerBasis": "A normalização é importante porque visa estruturar as relações de modo a reduzir a redundância de dados e evitar anomalias de inserção, atualização e exclusão, garantindo maior integridade e consistência ao banco de dados."
  },
  {
    "id": 47,
    "sourcePage": 48,
    "source": "Revisão B1.pdf",
    "module": 4,
    "moduleTitle": "SQL Server e T-SQL",
    "relatedModules": [
      4
    ],
    "topic": "SSMS",
    "type": "multiple-choice",
    "question": "No contexto de administração e gerenciamento de ambientes relacionais utilizando a tecnologia da Microsoft, o SSMS (SQL Server Management Studio) desempenha um papel central. Com base nos recursos e na finalidade dessa ferramenta, analise as alternativas abaixo e assinale a correta:",
    "options": {
      "A": "O SSMS é uma ferramenta integrada de gerenciamento utilizada para configurar, administrar e gerenciar instâncias do SQL Server, permitindo desde a criação de consultas T-SQL até o desenvolvimento de diagramas de banco de dados e o monitoramento de performance.",
      "B": "O SSMS é um SGBD NoSQL distribuído voltado exclusivamente para a execução de arquivos de texto locais em servidores sem interface gráfica",
      "C": "O SSMS corresponde a uma restrição de integridade física utilizada para validar chaves estrangeiras diretamente no hardware da máquina",
      "D": "O SSMS é um operador matemático restrito ao cálculo dinâmico de atributos derivados em memória volátil",
      "E": "O SSMS substitui por completo a necessidade de tabelas relacionais, armazenando todos os registros em formato de arquivos de log compactados"
    },
    "answer": "A",
    "scored": true,
    "sourceStatus": "ok",
    "note": "",
    "answerBasis": "O SSMS é uma ferramenta integrada de gerenciamento utilizada para configurar, administrar e gerenciar instâncias do SQL Server, permitindo desde a criação de consultas T-SQL até o desenvolvimento de diagramas de banco de dados e o monitoramento de performance."
  },
  {
    "id": 48,
    "sourcePage": 49,
    "source": "Revisão B1.pdf",
    "module": 4,
    "moduleTitle": "SQL Server e T-SQL",
    "relatedModules": [
      4
    ],
    "topic": "CREATE TABLE",
    "type": "multiple-choice",
    "question": "Na linguagem SQL (Structured Query Language), a definição e a criação da estrutura de armazenamento dos dados em um SGBD relacional são realizadas por meio de comandos específicos de DDL (Data Definition Language). Considerando a sintaxe e a finalidade do comando CREATE TABLE, analise as alternativas abaixo e assinale a correta:",
    "options": {
      "A": "O comando CREATE TABLE é utilizado para definir e criar uma nova tabela no banco de dados, especificando o nome da tabela, o conjunto de colunas (atributos), os respectivos tipos de dados de cada coluna e as restrições de integridade, como chaves primárias e estrangeiras.",
      "B": "O comando CREATE TABLE pertence à categoria DML e serve estritamente para apagar registros duplicados de tabelas temporárias em memória volátil",
      "C": "O comando CREATE TABLE é um operador matemático utilizado para calcular valores derivados de atributos multivalorados em tempo de execução",
      "D": "O comando CREATE TABLE substitui a necessidade do Diagrama de Entidade-Relacionamento (DER) ao gerar automaticamente arquivos de log em disco NoSQL",
      "E": "O comando CREATE TABLE executa consultas complexas utilizando cláusulas obrigatórias como SELECT, FROM e WHERE para recuperar tuplas sem alterar a estrutura física do banco"
    },
    "answer": "A",
    "scored": true,
    "sourceStatus": "ok",
    "note": "",
    "answerBasis": "O comando CREATE TABLE é utilizado para definir e criar uma nova tabela no banco de dados, especificando o nome da tabela, o conjunto de colunas (atributos), os respectivos tipos de dados de cada coluna e as restrições de integridade, como chaves primárias e estrangeiras."
  },
  {
    "id": 49,
    "sourcePage": 50,
    "source": "Revisão B1.pdf",
    "module": 4,
    "moduleTitle": "SQL Server e T-SQL",
    "relatedModules": [
      4
    ],
    "topic": "ALTER TABLE",
    "type": "multiple-choice",
    "question": "Na linguagem SQL (Structured Query Language), a manutenção e a evolução da estrutura de um banco de dados relacional exigem comandos capazes de modificar tabelas já existentes sem a necessidade de recriá-las do zero. Com base na sintaxe e na finalidade do comando ALTER TABLE, analise as alternativas abaixo e assinale a correta:",
    "options": {
      "A": "O comando ALTER TABLE pertence à linguagem de definição de dados (DDL) e é utilizado para modificar a estrutura de uma tabela existente, permitindo adicionar, alterar ou remover colunas, além de incluir ou excluir restrições de integridade, como chaves primárias e estrangeiras.",
      "B": "O comando ALTER TABLE é um operador DML restrito exclusivamente à inserção de novas linhas e registros duplicados em tabelas temporárias",
      "C": "O comando ALTER TABLE serve apenas para realizar consultas complexas de recuperação de dados utilizando obrigatoriamente as cláusulas SELECT e FROM",
      "D": "O comando ALTER TABLE executa a exclusão definitiva de todo o banco de dados e de seus arquivos de log do disco rígido",
      "E": "O comando ALTER TABLE substitui a necessidade do Diagrama de Entidade-Relacionamento (DER) ao gerar automaticamente subtipos em SGBDs NoSQL"
    },
    "answer": "A",
    "scored": true,
    "sourceStatus": "ok",
    "note": "",
    "answerBasis": "O comando ALTER TABLE pertence à linguagem de definição de dados (DDL) e é utilizado para modificar a estrutura de uma tabela existente, permitindo adicionar, alterar ou remover colunas, além de incluir ou excluir restrições de integridade, como chaves primárias e estrangeiras."
  },
  {
    "id": 50,
    "sourcePage": 51,
    "source": "Revisão B1.pdf",
    "module": 4,
    "moduleTitle": "SQL Server e T-SQL",
    "relatedModules": [
      4
    ],
    "topic": "DROP TABLE",
    "type": "multiple-choice",
    "question": "No contexto de comandos de definição de dados (DDL) na linguagem SQL, a remoção estrutural de objetos do banco de dados requer cuidado e precisão. Considerando a sintaxe e a finalidade do comando DROP TABLE, analise as alternativas abaixo e assinale a correta:",
    "options": {
      "A": "O comando DROP TABLE pertence à linguagem DDL e é utilizado para remover completamente uma tabela existente do banco de dados, excluindo tanto a sua estrutura quanto todos os dados armazenados e índices associados de forma definitiva.",
      "B": "O comando DROP TABLE é um operador DML restrito unicamente à exclusão lógica de linhas individuais através de uma cláusula WHERE baseada em filtros de texto",
      "C": "O comando DROP TABLE serve exclusivamente para criar novos relacionamentos do tipo N:N sem a necessidade de chaves primárias",
      "D": "O comando DROP TABLE corresponde a um cálculo matemático de atributos derivados executados em memória volátil durante consultas analíticas",
      "E": "O comando DROP TABLE substitui as chaves estrangeiras por arquivos de log compactados em discos rígidos locais sem alterar o catálogo do sistema"
    },
    "answer": "A",
    "scored": true,
    "sourceStatus": "ok",
    "note": "",
    "answerBasis": "O comando DROP TABLE pertence à linguagem DDL e é utilizado para remover completamente uma tabela existente do banco de dados, excluindo tanto a sua estrutura quanto todos os dados armazenados e índices associados de forma definitiva."
  },
  {
    "id": 51,
    "sourcePage": 52,
    "source": "Revisão B1.pdf",
    "module": 4,
    "moduleTitle": "SQL Server e T-SQL",
    "relatedModules": [
      4
    ],
    "topic": "INSERT",
    "type": "multiple-choice",
    "question": "Na linguagem SQL (Structured Query Language), a manipulação dos dados armazenados nas tabelas de um banco relacional é realizada por meio de comandos específicos de DML (Data Manipulation Language). Considerando a sintaxe e a finalidade do comando INSERT, analise as alternativas abaixo e assinale a correta:",
    "options": {
      "A": "O comando INSERT é utilizado para inserir novas linhas ou registros em uma tabela existente, permitindo especificar os valores correspondentes às colunas desejadas.",
      "B": "O comando INSERT pertence exclusivamente à categoria DDL e serve para apagar tabelas físicas do disco rígido",
      "C": "O comando INSERT é um operador matemático executado em memória volátil para calcular a média de atributos derivados",
      "D": "O comando INSERT substitui por completo a necessidade de chaves primárias e estrangeiras em SGBDs relacionais",
      "E": "O comando INSERT executa consultas complexas baseadas em filtros condicionais como a cláusula WHERE sem alterar o conteúdo armazenado"
    },
    "answer": "A",
    "scored": true,
    "sourceStatus": "ok",
    "note": "",
    "answerBasis": "O comando INSERT é utilizado para inserir novas linhas ou registros em uma tabela existente, permitindo especificar os valores correspondentes às colunas desejadas."
  },
  {
    "id": 52,
    "sourcePage": 53,
    "source": "Revisão B1.pdf",
    "module": 4,
    "moduleTitle": "SQL Server e T-SQL",
    "relatedModules": [
      4
    ],
    "topic": "UPDATE",
    "type": "multiple-choice",
    "question": "Na linguagem SQL (Structured Query Language), a alteração e a atualização dos dados já existentes em uma tabela relacional são executadas por meio de comandos de DML (Data Manipulation Language). Considerando a sintaxe e a finalidade do comando UPDATE, analise as alternativas abaixo e assinale a correta:",
    "options": {
      "A": "O comando UPDATE é utilizado para atualizar ou modificar os dados existentes em uma ou mais colunas de linhas já cadastradas em uma tabela, geralmente associado a uma cláusula de condição para restringir quais registros serão alterados.",
      "B": "O comando UPDATE pertence exclusivamente à categoria DDL e serve para apagar tabelas físicas do disco rígido",
      "C": "O comando UPDATE é um operador matemático executado em memória volátil para calcular a média de atributos derivados sem alterar o banco",
      "D": "O comando UPDATE substitui por completo a necessidade de chaves primárias e estrangeiras em SGBDs relacionais",
      "E": "O comando UPDATE executa a criação automática de novas tabelas utilizando a estrutura lógica de arquivos de log"
    },
    "answer": "A",
    "scored": true,
    "sourceStatus": "ok",
    "note": "",
    "answerBasis": "O comando UPDATE é utilizado para atualizar ou modificar os dados existentes em uma ou mais colunas de linhas já cadastradas em uma tabela, geralmente associado a uma cláusula de condição para restringir quais registros serão alterados."
  },
  {
    "id": 53,
    "sourcePage": 54,
    "source": "Revisão B1.pdf",
    "module": 4,
    "moduleTitle": "SQL Server e T-SQL",
    "relatedModules": [
      4
    ],
    "topic": "DELETE",
    "type": "multiple-choice",
    "question": "Na linguagem SQL (Structured Query Language), a remoção de registros existentes em uma tabela relacional é realizada por meio de comandos de DML (Data Manipulation Language). Considerando a sintaxe e a finalidade do comando DELETE, analise as alternativas abaixo e assinale a correta:",
    "options": {
      "A": "O comando DELETE é utilizado para remover uma ou mais linhas (registros) de uma tabela, sendo comumente empregado em conjunto com a cláusula WHERE para restringir quais tuplas serão apagadas.",
      "B": "O comando DELETE pertence exclusivamente à categoria DDL e serve para apagar tabelas físicas inteiras do disco rígido sem a necessidade de especificar condições",
      "C": "O comando DELETE é um operador matemático executado em memória volátil para calcular a média de atributos derivados",
      "D": "O comando DELETE substitui por completo a necessidade de chaves primárias e estrangeiras em SGBDs relacionais",
      "E": "O comando DELETE executa a criação automática de novas restrições de integridade utilizando arquivos de log compactados"
    },
    "answer": "A",
    "scored": true,
    "sourceStatus": "ok",
    "note": "",
    "answerBasis": "O comando DELETE é utilizado para remover uma ou mais linhas (registros) de uma tabela, sendo comumente empregado em conjunto com a cláusula WHERE para restringir quais tuplas serão apagadas."
  },
  {
    "id": 54,
    "sourcePage": 55,
    "source": "Revisão B1.pdf",
    "module": 4,
    "moduleTitle": "SQL Server e T-SQL",
    "relatedModules": [
      4
    ],
    "topic": "DELETE sem WHERE e recuperação",
    "type": "multiple-choice",
    "question": "João, um jovem desenvolvedor recém-contratado, trabalhava afobado em uma sexta-feira à tarde para limpar apenas os registros de teste da tabela de clientes em uma base de dados de produção no SQL Server. Ao executar o comando DELETE FROM Clientes; sem adicionar a cláusula WHERE, João percebeu horrorizado, milissegundos depois, que todos os milhares de cadastros ativos de clientes da empresa haviam sumido instantaneamente da tela do SSMS. Desesperado com o prejuízo e buscando uma solução rápida, ele tentou procurar os dados apagados na Lixeira do sistema operacional Windows do servidor. Considerando o funcionamento de SGBDs relacionais corporativos e a arquitetura do SQL Server, analise as alternativas abaixo e assinale a correta sobre o ocorrido e a forma de recuperação:",
    "options": {
      "A": "A ação executada por João removeu os dados das páginas de dados da tabela no banco de dados relacional de forma direta por meio de um comando DML sem filtro, e os registros não vão para a Lixeira do sistema operacional, exigindo para sua recuperação o restauro de um backup válido recente ou a utilização de transações com controle de escopo e logs de transação se disponíveis.",
      "B": "Os registros apagados por um comando DELETE no SQL Server são automaticamente movidos para a Lixeira do Windows no diretório raiz do servidor, bastando que João acesse a interface gráfica da lixeira e clique em \"Restaurar\" para reaver todos os dados instantaneamente",
      "C": "O comando executado por João pertence à categoria DDL e automaticamente cria um arquivo compactado na área de trabalho do servidor contendo uma cópia idêntica de todas as tuplas excluídas",
      "D": "A Lixeira do SSMS armazena por padrão todas as linhas apagadas por comandos DML em uma tabela temporária oculta em memória volátil, independentemente da ausência da cláusula WHERE",
      "E": "O SQL Server impede nativamente a execução de qualquer comando DELETE que não possua a cláusula WHERE, anulando o erro de João e mantendo os dados intactos no disco"
    },
    "answer": "A",
    "scored": true,
    "sourceStatus": "ok",
    "note": "",
    "answerBasis": "A ação executada por João removeu os dados das páginas de dados da tabela no banco de dados relacional de forma direta por meio de um comando DML sem filtro, e os registros não vão para a Lixeira do sistema operacional, exigindo para sua recuperação o restauro de um backup válido recente ou a utilização de transações com controle de escopo e logs de transação se disponíveis."
  },
  {
    "id": 55,
    "sourcePage": 56,
    "source": "Revisão B1.pdf",
    "module": 4,
    "moduleTitle": "SQL Server e T-SQL",
    "relatedModules": [
      4
    ],
    "topic": "TRUNCATE TABLE",
    "type": "multiple-choice",
    "question": "Durante uma rotina de manutenção em um banco de dados corporativo no SQL Server, um administrador precisou esvaziar rapidamente uma tabela de logs de acesso que continha milhões de registros obsoletos, liberando espaço em disco e reiniciando a contagem de sua chave primária do tipo IDENTITY. Considerando os comandos disponíveis na linguagem SQL para a remoção de dados, analise as alternativas abaixo e assinale a correta sobre o comando TRUNCATE TABLE:",
    "options": {
      "A": "O comando TRUNCATE TABLE é uma instrução DDL (Data Definition Language) que remove todas as linhas de uma tabela de forma rápida e eficiente, desalocando as páginas de dados e reiniciando eventuais contadores IDENTITY, sem registrar individualmente cada linha excluída no log de transações.",
      "B": "O comando TRUNCATE TABLE pertence exclusivamente à categoria DML e exige obrigatoriamente o uso da cláusula WHERE para apagar registros de forma filtrada linha por linha",
      "C": "O comando TRUNCATE TABLE envia automaticamente todas as tuplas excluídas para a Lixeira do sistema operacional Windows, permitindo sua restauração com um único clique",
      "D": "O comando TRUNCATE TABLE serve apenas para alterar a estrutura de colunas e adicionar chaves estrangeiras em tabelas temporárias",
      "E": "O comando TRUNCATE TABLE executa um cálculo matemático de agregação em memória volátil para estimar o volume de dados sem apagar nenhuma linha do disco"
    },
    "answer": "A",
    "scored": true,
    "sourceStatus": "ok",
    "note": "",
    "answerBasis": "O comando TRUNCATE TABLE é uma instrução DDL (Data Definition Language) que remove todas as linhas de uma tabela de forma rápida e eficiente, desalocando as páginas de dados e reiniciando eventuais contadores IDENTITY, sem registrar individualmente cada linha excluída no log de transações."
  },
  {
    "id": 56,
    "sourcePage": 57,
    "source": "Revisão B1.pdf",
    "module": 4,
    "moduleTitle": "SQL Server e T-SQL",
    "relatedModules": [
      4
    ],
    "topic": "DELETE vs TRUNCATE vs DROP",
    "type": "multiple-choice",
    "question": "Na administração e manipulação de bases de dados relacionais utilizando o SQL Server, a escolha correta entre os comandos de remoção é crucial para garantir a integridade e a performance do sistema. Os comandos DELETE, TRUNCATE e DROP possuem propósitos e categorias distintas. Analise as alternativas abaixo e assinale a correta sobre as diferenças fundamentais entre eles:",
    "options": {
      "A": "O DELETE é um comando DML que remove linhas de uma tabela (podendo usar WHERE) e registra cada exclusão individualmente no log de transações; o TRUNCATE é um comando DDL que remove todas as linhas rapidamente sem log detalhado por linha e reinicia contadores IDENTITY; e o DROP é um comando DDL que exclui definitivamente a tabela inteira, incluindo sua estrutura, dados, índices e restrições.",
      "B": "O DELETE, o TRUNCATE e o DROP pertencem todos à categoria DML e executam exatamente a mesma operação de exclusão lógica, enviando os dados automaticamente para a Lixeira do sistema operacional",
      "C": "O DROP é um comando DML exclusivo para limpar linhas específicas de uma tabela sem alterar sua estrutura, enquanto o DELETE apaga permanentemente o arquivo de catálogo do sistema do servidor",
      "D": "O TRUNCATE é um operador matemático executado em memória volátil para calcular a média de atributos derivados, sem impacto nas tabelas físicas",
      "E": "O DELETE e o TRUNCATE exigem obrigatoriamente a utilização da cláusula WHERE para filtrar quais linhas serão apagadas da tabela"
    },
    "answer": "A",
    "scored": true,
    "sourceStatus": "ok",
    "note": "",
    "answerBasis": "O DELETE é um comando DML que remove linhas de uma tabela (podendo usar WHERE) e registra cada exclusão individualmente no log de transações; o TRUNCATE é um comando DDL que remove todas as linhas rapidamente sem log detalhado por linha e reinicia contadores IDENTITY; e o DROP é um comando DDL que exclui definitivamente a tabela inteira, incluindo sua estrutura, dados, índices e restrições."
  },
  {
    "id": 57,
    "sourcePage": 58,
    "source": "Revisão B1.pdf",
    "module": 4,
    "moduleTitle": "SQL Server e T-SQL",
    "relatedModules": [
      4
    ],
    "topic": "SELECT",
    "type": "multiple-choice",
    "question": "No contexto de consultas em bancos de dados relacionais utilizando o SQL Server, a recuperação e a projeção de dados armazenados em tabelas são realizadas através da instrução fundamental de consulta. Analise as alternativas abaixo e assinale a correta sobre a finalidade e a estrutura básica do comando SELECT:",
    "options": {
      "A": "O comando SELECT pertence à categoria DQL (Data Query Language) e é utilizado para recuperar e consultar dados de uma ou mais tabelas, permitindo filtrar registros por meio da cláusula WHERE, projetar colunas específicas e ordenar os resultados com ORDER BY.",
      "B": "O comando SELECT é uma instrução DDL estritamente restrita à eliminação permanente de arquivos de log e tabelas físicas do disco rígido",
      "C": "O comando SELECT serve exclusivamente para inserir novas tuplas e atualizar valores em colunas do tipo IDENTITY sem consulta prévia",
      "D": "O comando SELECT corresponde a uma restrição de integridade referencial que substitui a necessidade de chaves estrangeiras",
      "E": "O comando SELECT executa a exclusão em massa de registros de uma tabela utilizando a lixeira nativa do sistema operacional"
    },
    "answer": "A",
    "scored": true,
    "sourceStatus": "ok",
    "note": "",
    "answerBasis": "O comando SELECT pertence à categoria DQL (Data Query Language) e é utilizado para recuperar e consultar dados de uma ou mais tabelas, permitindo filtrar registros por meio da cláusula WHERE, projetar colunas específicas e ordenar os resultados com ORDER BY."
  },
  {
    "id": 58,
    "sourcePage": 59,
    "source": "Revisão B1.pdf",
    "module": 4,
    "moduleTitle": "SQL Server e T-SQL",
    "relatedModules": [
      4
    ],
    "topic": "WHERE",
    "type": "multiple-choice",
    "question": "No SQL Server, a recuperação de registros específicos em uma tabela exige o uso de filtros para selecionar apenas as linhas que atendem a uma determinada condição. Considerando a sintaxe básica do comando SELECT associado à cláusula WHERE com uma condição simples de comparação, analise as alternativas abaixo e assinale a correta:",
    "options": {
      "A": "A cláusula WHERE é utilizada em conjunto com o comando SELECT para filtrar as linhas retornadas com base em uma condição específica (como uma comparação de igualdade utilizando o operador =), garantindo que apenas os registros que satisfaçam esse critério sejam exibidos no resultado.",
      "B": "A cláusula WHERE pertence exclusivamente à categoria DDL e serve para apagar tabelas físicas inteiras do disco rígido",
      "C": "A cláusula WHERE é um operador matemático executado em memória volátil para calcular a média de atributos derivados",
      "D": "A cláusula WHERE substitui a necessidade do uso do comando INSERT ao criar automaticamente novas linhas com valores nulos",
      "E": "A cláusula WHERE envia as tuplas excluídas por um comando DML diretamente para a lixeira do sistema operacional"
    },
    "answer": "A",
    "scored": true,
    "sourceStatus": "ok",
    "note": "",
    "answerBasis": "A cláusula WHERE é utilizada em conjunto com o comando SELECT para filtrar as linhas retornadas com base em uma condição específica (como uma comparação de igualdade utilizando o operador =), garantindo que apenas os registros que satisfaçam esse critério sejam exibidos no resultado."
  },
  {
    "id": 59,
    "sourcePage": 60,
    "source": "Revisão B1.pdf",
    "module": 4,
    "moduleTitle": "SQL Server e T-SQL",
    "relatedModules": [
      4
    ],
    "topic": "LIKE",
    "type": "multiple-choice",
    "question": "No SQL Server, quando há a necessidade de realizar buscas textuais flexíveis - como encontrar registros cujos nomes contenham determinadas palavras, comecem ou terminem com caracteres específicos -, a filtragem simples por igualdade (=) se torna insuficiente. Para atender a essa demanda, utiliza-se um operador específico na cláusula WHERE. Analise as alternativas abaixo e assinale a correta sobre a utilização do operador LIKE:",
    "options": {
      "A": "O operador LIKE é utilizado em conjunto com a cláusula WHERE para realizar buscas baseadas em padrões de caracteres em colunas de texto, empregando caracteres coringas (como o %) para identificar correspondências parciais, a exemplo de registros que contenham um termo específico em qualquer parte da string.",
      "B": "O operador LIKE pertence exclusivamente à categoria DDL e serve para excluir fisicamente tabelas do disco rígido sem verificação de catálogo",
      "C": "O operador LIKE é um comando de controle de transações voltado unicamente para restaurar arquivos apagados por um DELETE sem WHERE",
      "D": "O operador LIKE substitui a necessidade de chaves primárias e estrangeiras na modelagem de relacionamentos N:N",
      "E": "O operador LIKE executa o cálculo de agregação matemática da média de preços de uma tabela em memória volátil"
    },
    "answer": "A",
    "scored": true,
    "sourceStatus": "ok",
    "note": "",
    "answerBasis": "O operador LIKE é utilizado em conjunto com a cláusula WHERE para realizar buscas baseadas em padrões de caracteres em colunas de texto, empregando caracteres coringas (como o %) para identificar correspondências parciais, a exemplo de registros que contenham um termo específico em qualquer parte da string."
  },
  {
    "id": 60,
    "sourcePage": 61,
    "source": "Revisão B1.pdf",
    "module": 4,
    "moduleTitle": "SQL Server e T-SQL",
    "relatedModules": [
      4
    ],
    "topic": "BETWEEN",
    "type": "multiple-choice",
    "question": "No SQL Server, ao realizar consultas que exigem a recuperação de registros cujos valores numéricos ou temporais se encontram dentro de um determinado intervalo fechado (por exemplo, preços entre 40.00 e 60.00), a utilização de múltiplos operadores relacionais pode ser simplificada por um operador específico. Analise as alternativas abaixo e assinale a correta sobre a utilização da cláusula BETWEEN:",
    "options": {
      "A": "O operador BETWEEN é utilizado em conjunto com a cláusula WHERE para filtrar registros cujo valor de um atributo esteja compreendido dentro de um intervalo específico (inclusivo dos limites inferior e superior), como demonstrado na instrução SELECT * FROM Pizzas WHERE Preco BETWEEN 40.00 AND 60.00;.",
      "B": "O operador BETWEEN pertence exclusivamente à categoria DDL e serve para excluir fisicamente tabelas do banco de dados relacional",
      "C": "O operador BETWEEN é um comando de controle de transações voltado unicamente para restaurar arquivos apagados por um DELETE sem WHERE",
      "D": "O operador BETWEEN substitui a necessidade de chaves primárias na definição estrutural de tabelas no SSMS",
      "E": "O operador BETWEEN executa a criação automática de novas colunas em tempo de execução utilizando arquivos de log compactados"
    },
    "answer": "A",
    "scored": true,
    "sourceStatus": "ok",
    "note": "",
    "answerBasis": "O operador BETWEEN é utilizado em conjunto com a cláusula WHERE para filtrar registros cujo valor de um atributo esteja compreendido dentro de um intervalo específico (inclusivo dos limites inferior e superior), como demonstrado na instrução SELECT * FROM Pizzas WHERE Preco BETWEEN 40.00 AND 60.00;."
  },
  {
    "id": 61,
    "sourcePage": 62,
    "source": "Revisão B1.pdf",
    "module": 4,
    "moduleTitle": "SQL Server e T-SQL",
    "relatedModules": [
      4
    ],
    "topic": "IN",
    "type": "multiple-choice",
    "question": "No SQL Server, quando é necessário filtrar registros cujos valores de uma coluna específica correspondam a um conjunto de múltiplos valores possíveis (o que, de outra forma, exigiria o uso repetido de várias condições unidas por OR), a linguagem disponibiliza um operador dedicado para otimizar e enxutizar a instrução. Analise as alternativas abaixo e assinale a correta sobre a utilização do operador IN:",
    "options": {
      "A": "A) O operador IN é utilizado em conjunto com a cláusula WHERE para verificar se o valor de uma coluna coincide com qualquer um dos elementos de uma lista pré-definida de valores informada entre parênteses (como em WHERE Categoria IN ('Doces', 'Especiais')), simplificando a lógica da consulta.",
      "B": "O operador IN pertence exclusivamente à categoria DDL e serve estritamente para apagar tabelas físicas inteiras do disco rígido sem verificação de catálogo",
      "C": "O operador IN é um comando de controle de transações voltado unicamente para restaurar arquivos apagados por um DELETE incorreto",
      "D": "O operador IN substitui a necessidade absoluta de chaves primárias na modelagem relacional do SSMS",
      "E": "O operador IN executa o cálculo matemático da média ponderada de atributos numéricos em memória volátil."
    },
    "answer": "A",
    "scored": true,
    "sourceStatus": "ok",
    "note": "",
    "answerBasis": "A) O operador IN é utilizado em conjunto com a cláusula WHERE para verificar se o valor de uma coluna coincide com qualquer um dos elementos de uma lista pré-definida de valores informada entre parênteses (como em WHERE Categoria IN ('Doces', 'Especiais')), simplificando a lógica da consulta."
  },
  {
    "id": 62,
    "sourcePage": 63,
    "source": "Revisão B1.pdf",
    "module": 4,
    "moduleTitle": "SQL Server e T-SQL",
    "relatedModules": [
      4
    ],
    "topic": "IS NULL",
    "type": "multiple-choice",
    "question": "No SQL Server, a verificação da ausência de dados em colunas que permitem valores nulos exige um cuidado especial, uma vez que operadores de comparação tradicionais (como o sinal de igual = NULL) não funcionam corretamente para esse propósito. Analise as alternativas abaixo e assinale a correta sobre a utilização da cláusula com o operador IS NULL:",
    "options": {
      "A": "O operador IS NULL é utilizado em conjunto com a cláusula WHERE para filtrar e recuperar registros em que uma coluna específica não possui valor atribuído (ou seja, contém um valor nulo), como demonstrado na instrução SELECT * FROM Pedidos WHERE DataEntrega IS NULL;.",
      "B": "O operador IS NULL pertence exclusivamente à categoria DDL e serve para apagar tabelas físicas inteiras do disco rígido sem a necessidade de verificação",
      "C": "O operador IS NULL é um comando de controle de transações voltado unicamente para restaurar arquivos apagados por um DELETE sem a cláusula WHERE",
      "D": "O operador IS NULL substitui a necessidade de chaves primárias na definição estrutural de tabelas no SSMS.",
      "E": "O operador IS NULL executa o cálculo matemático da soma total de valores duplicados em memória volátil"
    },
    "answer": "A",
    "scored": true,
    "sourceStatus": "ok",
    "note": "",
    "answerBasis": "O operador IS NULL é utilizado em conjunto com a cláusula WHERE para filtrar e recuperar registros em que uma coluna específica não possui valor atribuído (ou seja, contém um valor nulo), como demonstrado na instrução SELECT * FROM Pedidos WHERE DataEntrega IS NULL;."
  },
  {
    "id": 63,
    "sourcePage": 64,
    "source": "Revisão B1.pdf",
    "module": 4,
    "moduleTitle": "SQL Server e T-SQL",
    "relatedModules": [
      4
    ],
    "topic": "FOREIGN KEY",
    "type": "multiple-choice",
    "question": "No contexto de modelagem relacional e da linguagem SQL no SQL Server, a garantia de integridade referencial entre tabelas independentes é um dos pilares fundamentais para evitar dados órfãos ou inconsistentes. Analise as alternativas abaixo e assinale a correta sobre a definição e a finalidade de uma Chave Estrangeira (Foreign Key):",
    "options": {
      "A": "A chave estrangeira é um campo (ou conjunto de campos) em uma tabela cuja função é referenciar de forma inequívoca a chave primária de outra tabela, estabelecendo um vínculo relacional lógico e impondo regras de integridade referencial que impedem a inserção de registros dependentes sem um pai correspondente.",
      "B": "A chave estrangeira é um comando DML executado em tempo de execução para calcular automaticamente a média de atributos derivados em memória volátil",
      "C": "A chave estrangeira serve exclusivamente para apagar fisicamente tabelas do disco rígido sem a necessidade de verificação de dependências no catálogo do sistema",
      "D": "A chave estrangeira corresponde a um tipo de arquivo compactado gerado pelo SSMS para restaurar dados apagados por comandos sem o uso da cláusula WHERE",
      "E": "A chave estrangeira substituirá obrigatoriamente a necessidade de índices e restrições de unicidade em colunas do tipo IDENTITY"
    },
    "answer": "A",
    "scored": true,
    "sourceStatus": "ok",
    "note": "",
    "answerBasis": "A chave estrangeira é um campo (ou conjunto de campos) em uma tabela cuja função é referenciar de forma inequívoca a chave primária de outra tabela, estabelecendo um vínculo relacional lógico e impondo regras de integridade referencial que impedem a inserção de registros dependentes sem um pai correspondente."
  },
  {
    "id": 64,
    "sourcePage": 65,
    "source": "Revisão B1.pdf",
    "module": 3,
    "moduleTitle": "Modelo Relacional e Normalização",
    "relatedModules": [
      2,
      3
    ],
    "topic": "cardinalidade 1:1 e implementação",
    "type": "multiple-choice",
    "question": "No contexto de modelagem conceitual de dados e diagramas entidade-relacionamento (DER), a definição correta das cardinalidades é essencial para representar fielmente as regras de negócio do mundo real. Analise as alternativas abaixo e assinale a correta sobre a modelagem de um relacionamento do tipo 1:1 (um para um):",
    "options": {
      "A": "Um relacionamento do tipo 1:1 ocorre quando uma ocorrência de uma entidade está associada, no máximo, a uma única ocorrência de outra entidade, e vice-versa; na implementação relacional prática no SQL Server, isso é frequentemente estruturado compartilhando a mesma chave primária ou aplicando uma restrição de unicidade (UNIQUE) na coluna de chave estrangeira que referencia a outra tabela.",
      "B": "Um relacionamento do tipo 1:1 indica obrigatoriamente que uma única entidade armazena múltiplos registros aninhados sem chaves primárias ou restrições de unicidade",
      "C": "Um relacionamento do tipo 1:1 é uma restrição exclusiva da linguagem DML utilizada unicamente para otimizar o desempenho de comandos UPDATE em massa",
      "D": "Um relacionamento do tipo 1:1 serve exclusivamente para apagar fisicamente tabelas secundárias do disco rígido quando o comando DELETE é executado sem a cláusula WHERE",
      "E": "Um relacionamento do tipo 1:1 substitui por completo a necessidade de comandos DQL como o SELECT ao gerar automaticamente relatórios impressos na lixeira do sistema operacional"
    },
    "answer": "A",
    "scored": true,
    "sourceStatus": "ok",
    "note": "",
    "answerBasis": "Um relacionamento do tipo 1:1 ocorre quando uma ocorrência de uma entidade está associada, no máximo, a uma única ocorrência de outra entidade, e vice-versa; na implementação relacional prática no SQL Server, isso é frequentemente estruturado compartilhando a mesma chave primária ou aplicando uma restrição de unicidade (UNIQUE) na coluna de chave estrangeira que referencia a outra tabela."
  },
  {
    "id": 65,
    "sourcePage": 66,
    "source": "Revisão B1.pdf",
    "module": 3,
    "moduleTitle": "Modelo Relacional e Normalização",
    "relatedModules": [
      2,
      3
    ],
    "topic": "cardinalidade 1:N e implementação",
    "type": "multiple-choice",
    "question": "No processo de modelagem conceitual e lógica de bancos de dados relacionais, a correta representação das associações entre entidades é fundamental para evitar redundâncias e garantir a integridade estrutural. Analise as alternativas abaixo e assinale a correta sobre a modelagem e a implementação prática de um relacionamento do tipo 1:N (um para muitos):",
    "options": {
      "A": "Um relacionamento do tipo 1:N ocorre quando uma ocorrência da entidade do lado \"um\" pode estar associada a várias ocorrências da entidade do lado \"muitos\", enquanto cada ocorrência do lado \"muitos\" está associada a apenas uma ocorrência do lado \"um\"; na implementação relacional no SQL Server, isso é estruturado migrando a chave primária da tabela do lado \"um\" para a tabela do lado \"muitos\" na forma de uma chave estrangeira (Foreign Key).",
      "B": "Um relacionamento do tipo 1:N exige obrigatoriamente a criação de uma terceira tabela intermediária (tabela associativa) contendo apenas chaves primárias compostas, sem a migração de atributos",
      "C": "Um relacionamento do tipo 1:N é um comando DML executado unicamente em tempo de execução para calcular a média de atributos derivados em memória volátil",
      "D": "Um relacionamento do tipo 1:N serve exclusivamente para apagar fisicamente tabelas do disco rígido quando o comando DELETE é executado sem a cláusula WHERE",
      "E": "Um relacionamento do tipo 1:N substitui a necessidade de índices e restrições de unicidade em colunas do tipo IDENTITY"
    },
    "answer": "A",
    "scored": true,
    "sourceStatus": "ok",
    "note": "",
    "answerBasis": "Um relacionamento do tipo 1:N ocorre quando uma ocorrência da entidade do lado \"um\" pode estar associada a várias ocorrências da entidade do lado \"muitos\", enquanto cada ocorrência do lado \"muitos\" está associada a apenas uma ocorrência do lado \"um\"; na implementação relacional no SQL Server, isso é estruturado migrando a chave primária da tabela do lado \"um\" para a tabela do lado \"muitos\" na forma de uma chave estrangeira (Foreign Key)."
  },
  {
    "id": 66,
    "sourcePage": 67,
    "source": "Revisão B1.pdf",
    "module": 3,
    "moduleTitle": "Modelo Relacional e Normalização",
    "relatedModules": [
      2,
      3
    ],
    "topic": "cardinalidade N:1 e implementação",
    "type": "multiple-choice",
    "question": "Na modelagem de bancos de dados relacionais utilizando o SQL Server, compreender a direção e a tradução física das cardinalidades é essencial para a correta integridade dos dados. Analise as alternativas abaixo e assinale a correta sobre a modelagem e implementação de um relacionamento do tipo N:1 (muitos para um):",
    "options": {
      "A": "Um relacionamento do tipo N:1 indica que muitas ocorrências de uma primeira entidade podem se relacionar com apenas uma única ocorrência de uma segunda entidade; na implementação prática no SQL Server, essa cardinalidade é resolvida colocando a chave primária da tabela do lado \"um\" como uma chave estrangeira (Foreign Key) na tabela do lado \"muitos\".",
      "B": "Um relacionamento do tipo N:1 exige obrigatoriamente a criação de uma tabela intermediária exclusiva para armazenar a Lixeira do sistema operacional",
      "C": "Um relacionamento do tipo N:1 é uma instrução DDL restrita à exclusão definitiva de arquivos de log e catálogos do sistema",
      "D": "Um relacionamento do tipo N:1 corresponde a um comando DML executado em memória volátil para calcular a média de atributos derivados sem o uso da cláusula WHERE",
      "E": "Um relacionamento do tipo N:1 substitui por completo a necessidade de chaves primárias e restrições de unicidade em tabelas corporativas"
    },
    "answer": "A",
    "scored": true,
    "sourceStatus": "ok",
    "note": "",
    "answerBasis": "Um relacionamento do tipo N:1 indica que muitas ocorrências de uma primeira entidade podem se relacionar com apenas uma única ocorrência de uma segunda entidade; na implementação prática no SQL Server, essa cardinalidade é resolvida colocando a chave primária da tabela do lado \"um\" como uma chave estrangeira (Foreign Key) na tabela do lado \"muitos\"."
  },
  {
    "id": 67,
    "sourcePage": 68,
    "source": "Revisão B1.pdf",
    "module": 3,
    "moduleTitle": "Modelo Relacional e Normalização",
    "relatedModules": [
      2,
      3
    ],
    "topic": "cardinalidade N:M e tabela associativa",
    "type": "multiple-choice",
    "question": "No contexto de modelagem conceitual e lógica em bancos de dados relacionais, a representação de cenários onde múltiplas ocorrências de uma entidade se associam a múltiplas ocorrências de outra entidade exige uma estrutura específica de implementação. Analise as alternativas abaixo e assinale a correta sobre a modelagem e a implementação física de um relacionamento do tipo N:M (muitos para muitos) - também referenciado como N:N:",
    "options": {
      "A": "Um relacionamento do tipo N:M ocorre quando várias ocorrências de uma entidade podem se associar a várias ocorrências de outra entidade; na implementação prática no SQL Server, esse tipo de associação não pode ser resolvido diretamente por uma simples chave estrangeira em uma das tabelas principais, exigindo obrigatoriamente a criação de uma terceira tabela intermediária (chamada de tabela associativa ou de junção) que armazena as chaves primárias de ambas as entidades participantes para formar uma chave primária composta e gerenciar os vínculos",
      "B": "Um relacionamento do tipo N:M é resolvido automaticamente pelo SGBD ao duplicar todos os dados textuais em uma única coluna sem restrições de unicidade",
      "C": "Um relacionamento do tipo N:M é um comando DML executado em memória volátil exclusivamente para calcular a média de atributos derivados sem o uso da cláusula WHERE",
      "D": "Um relacionamento do tipo N:M serve apenas para apagar fisicamente tabelas do disco rígido quando o comando DELETE é executado sem filtros",
      "E": "Um relacionamento do tipo N:M substitui por completo a necessidade de comandos de consulta DQL e restrições de integridade referencial"
    },
    "answer": "A",
    "scored": true,
    "sourceStatus": "ok",
    "note": "",
    "answerBasis": "Um relacionamento do tipo N:M ocorre quando várias ocorrências de uma entidade podem se associar a várias ocorrências de outra entidade; na implementação prática no SQL Server, esse tipo de associação não pode ser resolvido diretamente por uma simples chave estrangeira em uma das tabelas principais, exigindo obrigatoriamente a criação de uma terceira tabela intermediária (chamada de tabela associativa ou de junção) que armazena as chaves primárias de ambas as entidades participantes para formar uma chave primária composta e gerenciar os vínculos"
  },
  {
    "id": 69,
    "sourcePage": 69,
    "source": "Revisão B1.pdf",
    "module": 1,
    "moduleTitle": "Conceitos e Ciclo de Vida do Banco de Dados",
    "relatedModules": [
      1,
      3
    ],
    "topic": "conceitual, lógico e físico",
    "type": "multiple-choice",
    "question": "No ciclo de desenvolvimento de bases de dados relacionais, o processo de engenharia avança por três níveis principais de abstração, cada um com propósitos e elementos estruturais específicos. Considerando as características e os componentes de cada etapa Conceitual, Lógico e Físico, analise as alternativas abaixo e assinale a correta:",
    "options": {
      "A": "O modelo conceitual foca nas regras de negócio e utiliza elementos abstratos como entidades, atributos e relacionamentos; o modelo lógico traduz essa estrutura para o formato relacional com tabelas, colunas, chaves primárias e estrangeiras, mantendo-se independente de SGBD; por fim, o modelo físico implementa o banco em um SGBD específico (como o SQL Server), definindo tipos de dados nativos (INT, VARCHAR), restrições físicas, índices e estruturas de armazenamento em disco.",
      "B": "O modelo conceitual contém os scripts DDL finais voltados exclusivamente para o SQL Server, enquanto o modelo físico define apenas conceitos abstratos de negócio sem tabelas",
      "C": "O modelo lógico é responsável exclusivamente por apagar dados temporários da lixeira do sistema operacional utilizando comandos DML sem a cláusula WHERE",
      "D": "O modelo físico é totalmente independente de qualquer SGBD e restringe-se a diagramas conceituais genéricos sem tipos de dados definidos",
      "E": "O modelo conceitual utiliza obrigatoriamente tabelas normalizadas e índices de disco criados por meio de arquivos compactados do SSMS"
    },
    "answer": "A",
    "scored": true,
    "sourceStatus": "ok",
    "note": "",
    "answerBasis": "O modelo conceitual foca nas regras de negócio e utiliza elementos abstratos como entidades, atributos e relacionamentos; o modelo lógico traduz essa estrutura para o formato relacional com tabelas, colunas, chaves primárias e estrangeiras, mantendo-se independente de SGBD; por fim, o modelo físico implementa o banco em um SGBD específico (como o SQL Server), definindo tipos de dados nativos (INT, VARCHAR), restrições físicas, índices e estruturas de armazenamento em disco."
  },
  {
    "id": 70,
    "sourcePage": 70,
    "source": "Revisão B1.pdf",
    "module": 3,
    "moduleTitle": "Modelo Relacional e Normalização",
    "relatedModules": [
      2,
      3
    ],
    "topic": "mapeamento de atributo derivado",
    "type": "multiple-choice",
    "question": "Durante a transição do modelo conceitual para o modelo lógico, o projetista de banco de dados deve tratar os diversos tipos de atributos presentes nas entidades, decidindo como lidar com aqueles cujos valores não são armazenados diretamente, mas sim obtidos por meio de fórmulas ou operações matemáticas a partir de outros dados (como o cálculo da idade a partir da data de nascimento ou o valor total de um item multiplicando quantidade pelo preço unitário). Analise as alternativas abaixo e assinale a correta sobre o tratamento de atributos calculados (ou derivados) nessa conversão:",
    "options": {
      "A": "Na conversão para o modelo lógico, os atributos calculados geralmente não devem ser transformados em colunas físicas permanentes na tabela, pois geram redundância e risco de inconsistência; em vez disso, no modelo lógico e físico, eles são eliminados da estrutura de armazenamento e recalculados sob demanda em tempo de execução por meio de expressões DQL (como funções ou colunas computadas), a menos que estritos requisitos de desempenho (otimização por pré-cálculo) exijam a sua persistência controlada.",
      "B": "Os atributos calculados são convertidos obrigatoriamente em chaves primárias compostas na tabela do modelo lógico, substituindo todas as restrições de unicidade.",
      "C": "Os atributos calculados transformam-se em comandos DDL exclusivos de exclusão física de arquivos de log do SQL Server.",
      "D": "Na conversão lógica, os atributos calculados são armazenados permanentemente em arquivos temporários localizados na Lixeira do sistema operacional.",
      "E": "O modelo lógico obriga que todo atributo calculado seja transformado em uma tabela associativa do tipo N:M sem chaves estrangeiras."
    },
    "answer": "A",
    "scored": true,
    "sourceStatus": "ok",
    "note": "",
    "answerBasis": "Na conversão para o modelo lógico, os atributos calculados geralmente não devem ser transformados em colunas físicas permanentes na tabela, pois geram redundância e risco de inconsistência; em vez disso, no modelo lógico e físico, eles são eliminados da estrutura de armazenamento e recalculados sob demanda em tempo de execução por meio de expressões DQL (como funções ou colunas computadas), a menos que estritos requisitos de desempenho (otimização por pré-cálculo) exijam a sua persistência controlada."
  },
  {
    "id": 71,
    "sourcePage": 71,
    "source": "Revisão B1.pdf",
    "module": 3,
    "moduleTitle": "Modelo Relacional e Normalização",
    "relatedModules": [
      2,
      3
    ],
    "topic": "conversão de DER para modelo lógico",
    "type": "open",
    "question": "Dado o modelo conceitual a seguir, desenhe o modelo lógico (esquema de tabelas) resultante desta modelagem.",
    "options": {},
    "answer": null,
    "scored": false,
    "sourceStatus": "diagram-open-question",
    "note": "Questão aberta com diagrama. Exibir um DER refeito em SVG e permitir ao aluno revelar a resposta esperada.",
    "expectedAnswer": {
      "Funcionario": {
        "columns": [
          "id_funcionario (PK)",
          "data_nascimento",
          "nome",
          "cpf"
        ],
        "omit": [
          "idade (atributo derivado, recalculado sob demanda)"
        ]
      },
      "FuncionarioTelefone": {
        "columns": [
          "id_funcionario (PK, FK -> Funcionario.id_funcionario)",
          "telefone (PK)"
        ],
        "reason": "Telefone é multivalorado e vira uma relação separada."
      },
      "Departamento": {
        "columns": [
          "id_departamento (PK)",
          "nome",
          "id_funcionario (FK -> Funcionario.id_funcionario)"
        ],
        "reason": "No DER da questão, Gerencia é 1:N com 1 do lado de Funcionario e N do lado de Departamento; a chave do lado 1 migra para o lado N."
      }
    }
  }
];

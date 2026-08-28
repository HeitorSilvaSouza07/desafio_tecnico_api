# Gestão escolar:

## Definições

### Entidades

- Professor
- Diretor
- Aluno
- Secretario

### Requisitos Funcionais:

- RF01: Cadastrar Usuarios
- RF02: Editar Usuarios
- RF03: Subir notas de alunos
- RF04: Cadastrar materias
- RF05: Cadastrar turmas
- RF06: Gerar boletin

### Requisitos Não Funcionaios:

- RNF01: Desempenho
- RNF02: Confiabilidade
- RNF03: Segurança
- RNF04: Usabilidade

### Regras de negocio:

- RN01: Somente diretor e secretario podem cadastrar alunos e professores
- RN02: Somente professores podem inserir notas
- RN03: Somente secretarios podem criar materias e turmas
- RN04: O professor só pode assumir materias que não batem com o horario de outras aulas
- RN05: O aluno não pode assumir duas aulas no mesmo horario
- RN06: O aluno é reprovado em caso de nota abaixo de seis
- RN07: O aluno é reprovado em caso de presença abaixo de 70% ao final do semestre
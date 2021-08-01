# Alurakut

Projeto Alurakut desenvolvido durante a 3ª edição da Imersão React da Alura.

# Para rodar o programa

- `git clone` do repositório
- Instale as dependências do projeto com `yarn add`
- Crie um conta no [DatoCMS](https://www.datocms.com/), para conseguir cadastrar novas comunidades e buscar as comunidades cadastradas
    - Crie um novo projeto ex: Alurakut
    - Crie um modelo ex: Comunidade
    - Dentro do modelo, crie os campos:
        - title
        - url
        - creatorslug

        todos os campos são do tipo texto → string de linha única

        Caso houver alteração nos campos, não esquecer de alterar
        query{
          allComunidades{
            id
            title
            url
            creatorslug
          }
        }

    - Crie um arquivo `.env.local` para guardar o token utilizado na API

    ```json
    NEXT_PUBLIC_DATO_READ=[Read-only API token]
    DATO_FULL_ACCESS=[Full-access API token]
    DATO_MODEL_ID=[id modelo datoCMS]
    ```

    - Os tokens estão na aba Definições no DatoCMS → Tokens da API
- Depois é só rodar o comando `yarn dev`
- E acessar [http://localhost:3000/](http://localhost:3000/)
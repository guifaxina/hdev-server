## Hdev Server
Esse servidor é um serviço que provê uma API RESTful para uma aplicação no nicho de saúde. [Hdev Client](https://www.github.com/guifaxina/healthdev)

A API permite o client a criar um usuário, possui um endpoint para healthcheck e um para gerar uma URL de autorização de postagem de objetos em um Bucket dedicado na AWS S3.

## Guia de instalação.

As seguintes instruções vão gerar uma cópia do projeto pronto para rodar em sua máquina localmente.
O projeto requer o Node versão >= v18.12 e < 19. 

1. Clone o projeto:
```sh
$ git clone "https://github.com/guifaxina/hdev-server.git" <pasta(opcional)>
```
2. Entre na pasta que você especificou:
```sh
$ cd <pasta>
```
3. Instale as dependências e rode a aplicação:
```sh
$ npm i && npm run build && npm run start
```
O servidor estará rodando em <strong>http://localhost:8080</strong>

### Variáveis Ambiente

Você deverá criar um arquivo .env e preencher as seguintes variáveis ambiente:

| Nome | Conteúdo | Exemplo |
| ------ | -------- | ----------- |
| AWS_REGION    | Região do bucket na AWS | "sa-east-1" |
| AWS_BUCKETNAME    | Nome do bucket no S3 | "bucket-hdev-2024" |
| AWS_ACCESS_KEY   | Chave de acesso AWS | "ACFA5P2AXG91JKDWUSYSH" |
| AWS_SECRET_ACCESS_KEY   | Chave de acesso secreta | - |
| ORIGIN_URL   | Domínio do client | "https://healthdev-guifaxinas-projects.vercel.app/" |
| DATABASE_URL   | String de conexão do BD | "postgres://user:password@host:port/dbname" |

### API Endpoints

| Método | Endpoint | Descrição |
| ------ | -------- | ----------- |
| GET    | /api/v1/get-upload-profilepic-url | Gera URL autorizada para postagem direta no S3 Bucket. |
| GET    | /api/v1/healthcheck | Retorna status code 200. |
| POST   | /api/v1/create-user | Cria um novo usuário. |

### Feito com
* TypeScript
* NodeJs
  * Express
* AWS (S3, RDS)
* PostgreSQL
* PrismaORM

### Author
* [Guilherme Faxina](https://www.linkedin.com/in/guifaxina/)

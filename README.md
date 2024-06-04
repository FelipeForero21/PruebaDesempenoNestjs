<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).










# HU-SIMULACRUM API

HU-SIMULACRUM is a company dedicated to managing video game tournaments (esports) in Colombia. This API handles the management of tournaments, players, and results. Below is the documentation and steps to set up the project.

## Requirements

- Node.js
- PostgreSQL

## Installation

1. **Clone the repository**

    ```sh
    git clone https://github.com/your-username/hu-simulacrum-api.git
    cd hu-simulacrum-api
    ```

2. **Install dependencies**

    ```sh
    npm install
    ```

3. **Configure environment variables**

    Create a `.env` file in the root of the project and define the following variables:

    ```env
    DB_HOST=localhost
    DB_PORT=5432
    DB_USER=your_username
    DB_PASS=your_password
    DB_NAME=your_database_name
    
    
    env.example
	DB_NAME=verceldb
	DB_USER=default
	DB_PASS=9m5zcJjCukGU
	DB_HOST=ep-black-truth-a4t0w2kc-pooler.us-east-1.aws.neon.tech
	DB_PORT=5432```
```
```

4. **Run migrations**

    ```sh
    npm run typeorm migration:run
    ```

5. **Start the server**

    ```sh
    npm run start
    ```

## Endpoints

### Authentication

A guard (`ApiKeyGuard`) is used to protect routes, based on an API key provided in the request headers.
ApiKeyGuard = felipeforero

### Tournaments

- **Create a new tournament**

    ```http
    POST /tournaments/createNewTournament
    ```

    **Body**:

    ```json
    {
      "name": "tournament_name"
    }
    ```

- **Get all tournaments**

    ```http
    GET /tournaments/allTournaments
    ```

- **Get a tournament by ID**

    ```http
    GET /tournaments/:id
    ```

- **Update a tournament**

    ```http
    PUT /tournaments/UpdateTournament/:id
    ```

    **Body**:

    ```json
    {
      "name": "updated_tournament_name"
    }
    ```

- **Delete a tournament (soft delete)**

    ```http
    DELETE /tournaments/deleteTournament/:id
    ```

### Players

- **Create a new player**

    ```http
    POST /players/createNewPlayer
    ```

    **Body**:

    ```json
    {
      "name": "player_name"
    }
    ```

- **Get all players**

    ```http
    GET /players/allPlayer
    ```

- **Update a player**

    ```http
    PATCH /players/updatePlayer/:id
    ```

    **Body**:

    ```json
    {
      "name": "updated_player_name",
    }
    ```

- **Delete a player (soft delete)**

    ```http
    DELETE /players/deletePlayer/:id
    ```

- **Add a player to a tournament**

    ```http
    POST /players/:id/addPlayerToTournament/:tournamentId
    ```

### Results

- **Assign competition results randomly**

    ```http
    POST /results/allocationOfResults/:tournamentId
    ```

    **Body**:

    ```json
    {
      "winnerScore": 3,
      "loserScore": 1
    }
    ```

- **Get tournament results**

    ```http
    GET /results/:tournamentId
    ```

    **Query Params**:

    - `minScore`: Minimum score
    - `sort`: Order (`asc` or `desc`)
    - `page`: Page number
    - `limit`: Number of results per page

## Swagger

Swagger documentation is available at `/api`.

```

## Project Structure

```
src/
├── common/
│   └── guards/
│       └── api-key.guard.ts
├── players/
│   ├── dto/
│   │   ├── create-player.dto.ts
│   │   ├── update-player.dto.ts
│   ├── entities/
│   │   └── player.entity.ts
│   ├── players.controller.ts
│   ├── players.module.ts
│   └── players.service.ts
├── results/
│   ├── dto/
│   │   ├── create-result.dto.ts
│   │   ├── update-result.dto.ts
│   ├── entities/
│   │   └── result.entity.ts
│   ├── results.controller.ts
│   ├── results.module.ts
│   └── results.service.ts
├── tournament/
│   ├── dto/
│   │   ├── create-tournament.dto.ts
│   │   ├── update-tournament.dto.ts
│   ├── entities/
│   │   └── tournament.entity.ts
│   ├── tournament.controller.ts
│   ├── tournament.module.ts
│   └── tournament.service.ts
├── app.module.ts
├── main.ts
```

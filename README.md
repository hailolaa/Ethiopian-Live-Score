# Ethiopian Live Score

A web application for live Ethiopian Premier League football scores, fixtures, standings, teams, and player information.

![Project Banner](https://github.com/hailolaa/Ethiopian-Live-Score/raw/main/banner.png)

## Features

- **Live Scores:** Get minute-by-minute updates on ongoing Ethiopian Premier League matches.
- **Fixtures & Results:** Access detailed information about upcoming and completed matches, including scores, dates, times, and stadiums.
- **League Standings:** View updated league tables including position, played, won, drawn, lost, goals for/against, and points.
- **Teams & Players:** Browse team profiles, coaches, and stadium details. View star players' profiles, stats, and pictures.
- **Modern UI:** Built with ReactJS (frontend) and Node.js/Express (backend).

## Demo

A live demo may be available soon. Stay tuned for updates!

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [API-SPORTS Football API key](https://www.api-football.com/)

### Environment Variables

Create a `.env` file in the root and set the following (you will obtain these from API-SPORTS and the league info):

```bash
APISPORTS_KEY=your-api-key-here
ETHIOPIA_LEAGUE_ID=your-ethiopia-league-id
```

### Installation

#### Backend

```bash
cd server
npm install
npm start
```

#### Frontend

```bash
cd client
npm install
npm run dev
```

By default, the frontend runs on `localhost:5173` and proxies API requests to the backend on `localhost:5000`.

## Project Structure

```
server/        # Express.js backend API
client/        # React frontend app
```

### Main Components

- `LiveTicker`: Real-time updates for ongoing matches.
- `Fixtures`: List and details about upcoming/completed matches.
- `Standings`: League table.
- `TeamProfile` and `PlayerProfile`: Team and player information.
- Data fetching from API-SPORTS with fallback to mock data.

## Contributing

Pull requests are welcome! For major changes, open an issue first to discuss what you’d like to change.

## License

This project is released without a specific license. Please contact the repository owner (`hailolaa`) for usage permissions.

## Acknowledgments

- [API-SPORTS Football](https://www.api-football.com/) for live/scored data.

---

For questions or support, contact [@hailolaa](https://github.com/hailolaa).

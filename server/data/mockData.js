const teams = [
    { id: 1, name: "Saint George SC", city: "Addis Ababa", stadium: "Addis Ababa Stadium", coach: "Zlatko Krmpotić", logo: "/logos/saint-george.png" },
    { id: 2, name: "Ethiopian Coffee SC", city: "Addis Ababa", stadium: "Addis Ababa Stadium", coach: "Kassaye Arage", logo: "/logos/ethiopian-coffee.png" },
    { id: 3, name: "Fasil Kenema SC", city: "Gonder", stadium: "Fasiledes Stadium", coach: "Ashenafi Bekele", logo: "/logos/fasil.png" },
    { id: 4, name: "Bahir Dar City SC", city: "Bahir Dar", stadium: "Bahir Dar Stadium", coach: "Degarege Yigzaw", logo: "/logos/bahir-dar.png" },
    { id: 5, name: "Adama City SC", city: "Adama", stadium: "Abebe Bikila Stadium", coach: "Yitagesu Endale", logo: "/logos/adama.png" },
    { id: 6, name: "Hadiya Hossana FC", city: "Hossana", stadium: "Abiy Hersamo Stadium", coach: "Yared Gemechu", logo: "/logos/hadiya.png" },
    { id: 7, name: "Awassa City SC", city: "Awassa", stadium: "Hawassa Stadium", coach: "Zenebe Fisseha", logo: "/logos/awassa.png" },
    { id: 8, name: "Dire Dawa City SC", city: "Dire Dawa", stadium: "Dire Dawa Stadium", coach: "Jordan Abayneh", logo: "/logos/dire-dawa.png" },
    { id: 9, name: "Wolaitta Dicha SC", city: "Sodo", stadium: "Sodo Stadium", coach: "Tsegaye Zeleke", logo: "/logos/wolaitta.png" },
    { id: 10, name: "Sidama Coffee SC", city: "Hawassa", stadium: "Hawassa Stadium", coach: "Seyoum Kebede", logo: "/logos/sidama.png" }
];

const standings = teams.map((team, index) => ({
    teamId: team.id,
    teamName: team.name,
    played: 15,
    won: 10 - index,
    drawn: index % 3,
    lost: index % 2,
    goalsFor: 25 - index,
    goalsAgainst: 10 + index,
    points: (10 - index) * 3 + (index % 3)
})).sort((a, b) => b.points - a.points);

const players = [
    { id: 1, name: "Getaneh Kebede", teamId: 1, position: "Forward", goals: 12, assists: 5 },
    { id: 2, name: "Abubeker Nassir", teamId: 2, position: "Forward", goals: 15, assists: 3 },
    { id: 3, name: "Shimelis Bekele", teamId: 3, position: "Midfielder", goals: 8, assists: 10 },
    { id: 4, name: "Mujib Kassim", teamId: 4, position: "Forward", goals: 10, assists: 2 }
];

const fixtures = [
    { id: 101, homeTeamId: 1, awayTeamId: 2, date: "2026-01-05T15:00:00Z", stadium: "Addis Ababa Stadium", status: "scheduled" },
    { id: 102, homeTeamId: 3, awayTeamId: 4, date: "2025-12-30T15:00:00Z", stadium: "Fasiledes Stadium", status: "finished", score: { home: 2, away: 1 } },
    { id: 103, homeTeamId: 5, awayTeamId: 6, date: "2026-01-01T15:00:00Z", stadium: "Abebe Bikila Stadium", status: "live", score: { home: 1, away: 1 }, minute: 65 }
];

module.exports = { teams, standings, players, fixtures };

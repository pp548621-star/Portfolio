const fetchStats = async () => {
    try {
        const res = await fetch("https://alfa-leetcode-api.onrender.com/Pavan_1412/skillStats");
        const data = await res.json();
        console.log("SKILLS:");
        console.log(JSON.stringify(data, null, 2));

        const res2 = await fetch("https://alfa-leetcode-api.onrender.com/Pavan_1412/calendar");
        const data2 = await res2.json();
        console.log("CALENDAR:");
        console.log(JSON.stringify(data2, null, 2));
    } catch (e) {
        console.error(e);
    }
}
fetchStats();

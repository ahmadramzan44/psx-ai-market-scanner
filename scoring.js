function calculateScore(data) {

    const technicalScore =
        data.technical * 0.35;

    const fundamentalScore =
        data.fundamental * 0.30;

    const volumeMomentumScore =
        data.volumeMomentum * 0.15;

    const sectorMarketScore =
        data.sectorMarket * 0.10;

    const newsEventsScore =
        data.newsEvents * 0.10;


    const finalScore =
        technicalScore +
        fundamentalScore +
        volumeMomentumScore +
        sectorMarketScore +
        newsEventsScore;


    return Math.round(finalScore * 100) / 100;
}


function getSignalFromScore(score) {

    if (score >= 85) {

        return "STRONG BUY";

    }

    if (score >= 70) {

        return "BUY";

    }

    if (score >= 45) {

        return "WATCH";

    }

    if (score >= 25) {

        return "SELL";

    }

    return "STRONG SELL";
}


function analyzeStock(data) {

    const score =
        calculateScore(data);

    const signal =
        getSignalFromScore(score);


    return {

        score: score,

        signal: signal,

        breakdown: {

            technical:
                data.technical,

            fundamental:
                data.fundamental,

            volumeMomentum:
                data.volumeMomentum,

            sectorMarket:
                data.sectorMarket,

            newsEvents:
                data.newsEvents

        }

    };

}

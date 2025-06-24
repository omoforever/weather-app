

export async function GET(request) {

    const { searchParams } = new URL(request.url);
    const city = searchParams.get("city") || "Paris, FR";
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${process.env.NEXT_PUBLIC_WEATHER_API}`

    try {
        const response = await fetch(url);
        const data = await response.json();

        return Response.json(data);
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}
export interface IWheather {
    base: string;
    clouds: {
        all: number;
    };
    coord: {
        lat: number;
        long: number;
    };

    main: {
        feels_like: number;
        humidity: number;
        pressure: number;
        temp: number;
        temp_max: number;
        temp_min: number;
    };

    weather: [
        {
            id: number,
            main: string
            description: string,
            icon: string
        }
    ];

    name: string

}
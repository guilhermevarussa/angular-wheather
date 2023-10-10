export interface IWheather {
    base: string;
    clouds: {
        all: number;
    };
    coord: {
        lat: number;
        long: number;
    };

    main:{
        feels_like:number;
        humity:number;
        pressure:number;
        temp:number;
        temp_max:number;
        temp_min:number;
    };

    name:string

}
interface Cooler {
    id: number;
    modelo: string;
    temperatura: string;
    details: string;
    length: string;
    width: string;
    hight: string;
    capacity: string[];
    consumption: string[];
    standarSpecs: string[];
    AR: string[];
    imagen: string;
}


export const coolers: Cooler[] = [
    {
      "id": 1,
      "modelo": "CLH-60",
      "temperatura": "3 °C - 6 °C",
      "details": "Vertical Cooler with 3 Full Glass doors, modern curved appearance with innovative design features to maximize visibility and cost efficiency per ml",
      "length": "165.1 cm",
      "width": "80 cm",
      "hight": "205 cm",
      "capacity": [
        "Cans: 2,250",
        "Bottles: 958",
        "Shelves: 15",
        "Cubic Feet (ft3): 61.9",
        "Liters: 1,720.8",
        "Weight (kg): 260",
        "Facing Units *: ~175 | 108"
      ],
      "consumption": [
        "Voltage: 115 V",
        "Frequency: 50 Hz",
        "Refrigerant: R-290"
      ],
      "standarSpecs": [
        "Lighting system with high intensity LEDs",
        "Double tempered glass door",
        "High efficiency electronic motors",
        "Electronic smart control with energy saving system",
        "Variable speed compressor",
        "Low maintenance capacitor",
        "Eco-friendly polyurethane insulation"
      ],
      'AR':['nevera-clh-60-pepsi'],
      'imagen':'criotec'
    },
    {
      "id": 2,
      "modelo": "CLH-27",
      "temperatura": "3 °C - 6 °C",
      "details": "Vertical Cooler with 1 Wide-Full Glass door, modern curved appearance with innovative design features to maximize product visibility and brand positioning",
      "length": "77.2 cm",
      "width": "80 cm",
      "hight": "205 cm",
      "capacity": [
        "Cans: 880",
        "Bottles: 396",
        "Shelves: 4",
        "Cubic Feet (ft3): 26.8",
        "Liters: 761.1",
        "Weight (kg): 125",
        "Facing Units *: ~45 | 30"
      ],
      "consumption": [
        "Voltage: 115 V",
        "Frequency: 50 Hz",
        "Refrigerant: R-290"
      ],
      "standarSpecs": [
        "Lighting system with high intensity LEDs",
        "Double tempered glass door",
        "High efficiency electronic motors",
        "Electronic smart control with energy saving system",
        "Variable speed compressor",
        "Low maintenance capacitor",
        "Eco-friendly polyurethane insulation"
      ],
      'AR': ['nevera-clh-27-pepsi','nevera-clh-27-gatorade'],
      'imagen':'criotec'
    },
    {
      "id": 3,
      "modelo": "CLH-18",
      "temperatura": "3 °C - 6 °C",
      "details": "Vertical Cooler with 1 Slim-Full Glass door, modern curved appearance with innovative design features to optimize space requirements in the POS",
      "length": "53.7 cm",
      "width": "80 cm",
      "hight": "205 cm",
      "capacity": [
        "Cans: 576",
        "Bottles: 168",
        "Shelves: 4",
        "Cubic Feet (ft3): 17.5",
        "Liters: 497.9",
        "Weight (kg): 115",
        "Facing Units *: ~32 | 25"
      ],
      "consumption": [
        "Voltage: 115 V",
        "Frequency: 50 Hz",
        "Refrigerant: R-290"
      ],
      "standarSpecs": [
        "Lighting system with high intensity LEDs",
        "Double tempered glass door",
        "High efficiency electronic motors",
        "Electronic smart control with energy saving system",
        "Variable speed compressor",
        "Low maintenance capacitor",
        "Eco-friendly polyurethane insulation"
      ],
      'AR': ['nevera-clh-18'],
      'imagen':'criotec'
    },
    {
      "id": 4,
      "modelo": "CT-4",
      "temperatura": "3 °C - 6 °C",
      "details": "Vertical countertop cooler with 1 door, modern curved appearance with innovative design features to allocate in impulse zones like checkouts and counters",
      "length": "46.3 cm",
      "width": "55.5 cm",
      "hight": "109.5 cm",
      "capacity": [
        "Cans: 160",
        "Bottles: 80",
        "Shelves: 3",
        "Cubic Feet (ft3): 4.7",
        "Liters: 133",
        "Weight (kg): 55",
        "Facing Units SS: ~20"
      ],
      "consumption": [
        "Voltage: 110 V",
        "Frequency: 220 Hz",
        "Refrigerant: R-290"
      ],
      "standarSpecs": [
        "Lighting system with high intensity LEDs",
        "Double tempered glass door",
        "High efficiency electronic motors",
        "Electronic smart control with energy saving system",
        "Variable speed compressor",
        "Low maintenance capacitor",
        "Eco-friendly polyurethane insulation"
      ],
      'AR': ['nevera-ct4-pepsi','nevera-ct4-gatorlit']
      ,'imagen':'criotec'
    },
    {
      "id": 5,
      "modelo": "X-28-XL-VV",
      "temperatura": "0 °C - 4 °C",
      "details": "Vertical high-capacity cooler with double top-bottom glass door vision cooler to maximize assortment visibility",
      "length": "60.3 cm",
      "width": "110.2 cm",
      "hight": "203.2 cm",
      "capacity": [
        "Cans: 812",
        "Bottles: 525",
        "Shelves: 10",
        "Cubic Feet (ft3): 30",
        "Liters: 846",
        "Facing Units *: ~65 | 10"
      ],
      "consumption": [
        "Voltage: Universal",
        "HP: 2 X 1/2",
        "Refrigerant: R-290"
      ],
      "standarSpecs": [
        "LED interior illumination",
        "Double tempered glass door w/Low-E and argon gas",
        "Electronic fan motors",
        "Stabilizer heels & Casters",
        "Variable speed compressor",
        "Low maintenance capacitor",
        "Electronic smart control with energy saving system"
      ],
      'AR': ['nevera-x28'],
      'imagen':'fogel'
    },
    {
      "id": 6,
      "modelo": "V-280-BDC",
      "temperatura": "0 °C - 4 °C",
      "details": "Vertical high-capacity single solid back door visicooler, with glass front, specially designed for traditional trade inaccessible/gated locations",
      "length": "67.6 cm",
      "width": "71.4 cm",
      "hight": "205.1 cm",
      "capacity": [
        "Cans: 630",
        "Bottles: 240",
        "Shelves: 4",
        "Cubic Feet (ft3): 18",
        "Liters: 512",
        "Facing Units *: ~40 | 28"
      ],
      "consumption": [
        "Voltage: 115 V",
        "Frequency: 60 Hz",
        "Amps: 2.7",
        "Refrigerant: R-290"
      ],
      "standarSpecs": [
        "LED interior illumination + exterior canopy",
        "Double tempered glass door w/Low-E and argon gas",
        "Electronic fan motors",
        "Stabilizer heels & Casters",
        "Variable speed compressor",
        "Low maintenance capacitor",
        "Electronic smart control with energy saving system",
        "Rear solid door"
      ],
      'AR': ['nevera-v280'],
      'imagen':'fogel'
    },
    {
      "id": 7,
      "modelo": "PM-GTR",
      "temperatura": "0 °C - 4 °C",
      "details": "Small size countertop visicooler with maintenance-free static condenser. With custom premium decoration for Gatorade®. Can be mounted on walls",
      "length": "47.6 cm",
      "width": "59.1 cm",
      "hight": "57.1 cm",
      "capacity": [
        "Cans: 72",
        "Bottles: 30",
        "Shelves: 1",
        "Cubic Feet (ft3): 2.3",
        "Liters: 65.3",
        "Facing Units SS: ~16"
      ],
      "consumption": [
        "Voltage: 115 V",
        "Frequency: 60 Hz",
        "Amps: 0.8",
        "Refrigerant: R600-a"
      ],
      "standarSpecs": [
        "Door frame with aluminum cover",
        "Double pane glass door with Low-E and argon gas",
        "Stainless steel exterior cabinet",
        "Maintenance-free static condenser",
        "Electromechanical thermostat",
        "LED interior illumination",
        "Door handle with LCD screen to display branded messages"
      ],
        'AR': ['nevera-pm-gtr'],
        'imagen':'fogel'
    }
  ]
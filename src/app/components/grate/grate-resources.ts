export interface GrateProperties {
    mark: string;
    size: {
        width: number;
        height: number;
    }
    widthSection: number;
    square: number;
    rodThickness: number;
    numberOfSection: number;
}

export interface HammerCrusherProperties {
    mark: string;
    performance: number;
    rotationFrequency: number;
    mass: number;
    power: number;
}

export const gratePropsTable: GrateProperties[] = [
    {mark: 'МГ5Т', size: { width: 2, height: 3 },      square: 6, widthSection: 0.016, rodThickness: 0.008, numberOfSection: 84},
    {mark: 'МГ6Т', size: { width: 2, height: 2 },      square: 4, widthSection: 0.016 , rodThickness: 0.008, numberOfSection: 84},
    {mark: 'МГ7Т', size: { width: 0.8, height: 1.4 },  square: 1.12, widthSection: 0.016, rodThickness: 0.008, numberOfSection: 31},
    {mark: 'МГ8Т', size: { width: 1.4, height: 2 },    square: 2.8, widthSection: 0.016, rodThickness: 0.008, numberOfSection: 55},
    {mark: 'МГ9Т', size: { width: 1, height: 1.2 },    square: 1.2, widthSection: 0.016, rodThickness: 0.008, numberOfSection: 39},
    {mark: 'МГ10Т', size: { width: 1, height: 2 },     square: 2, widthSection: 0.016, rodThickness: 0.008, numberOfSection: 39},
    {mark: 'МГ11Т', size: { width: 1, height: 1.6 },   square: 1.6, widthSection: 0.016, rodThickness: 0.008, numberOfSection: 39},
    {mark: 'МГ12Т', size: { width: 1.6, height: 2 },   square: 3.2, widthSection: 0.016, rodThickness: 0.008, numberOfSection: 64},
    {mark: 'РМУ1', size: { width: 0.6, height: 0.8 },  square: 0.48, widthSection: 0.016, rodThickness: 0.006, numberOfSection: 21},
    {mark: 'РМУ2', size: { width: 1, height: 1 },      square: 1, widthSection: 0.016, rodThickness: 0.006, numberOfSection: 39},
    {mark: 'РМУ3', size: { width: 1, height: 2 },      square: 2, widthSection: 0.016, rodThickness: 0.006, numberOfSection: 39},
    {mark: 'РМУ4', size: { width: 1.5, height: 2 },    square: 3, widthSection: 0.016, rodThickness: 0.006, numberOfSection: 60},
    {mark: 'РМУ5', size: { width: 2, height: 2 },      square: 4, widthSection: 0.016, rodThickness: 0.006, numberOfSection: 84},
    {mark: 'РМУ6', size: { width: 2, height: 2.5 },    square: 5, widthSection: 0.016, rodThickness: 0.006, numberOfSection: 84},
    {mark: 'РМУ7', size: { width: 2.5, height: 3 },    square: 7.5, widthSection: 0.016, rodThickness: 0.006, numberOfSection: 107},
    {mark: 'РМН(10)', size: { width: 0.8, height: 3 }, square: 2.4, widthSection: 0.01, rodThickness: 0.01, numberOfSection: 40},
    {mark: 'РМН(6)', size: { width: 0.8, height: 3 },  square: 2.4, widthSection: 0.006, rodThickness: 0.01, numberOfSection: 50},
    {mark: 'РГД', size: { width: 0.9, height: 1 },     square: 0.9, widthSection: 0.01, rodThickness: 0.01, numberOfSection: 45},
    {mark: 'РФС-01', size: { width: 0.9, height: 1 },  square: 0.9, widthSection: 0.004, rodThickness: 0.003, numberOfSection: 130},
    {mark: 'RS-16', size: { width: 0.8, height: 1 },   square: 0.8, widthSection: 0.005, rodThickness: 0.003, numberOfSection: 100},
    {mark: 'RS-35', size: { width: 1.5, height: 3 },   square: 4.5, widthSection: 0.003, rodThickness: 0.003, numberOfSection: 250},
];

export const hammerCrushersProps: HammerCrusherProperties[] = [
    {mark: 'Д-3б', performance: 600, rotationFrequency: 1450, mass: 623, power: 22},
    {mark: 'ДК-1,0', performance: 1000, rotationFrequency: 1450, mass: 2000, power: 75},
];
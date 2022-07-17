import { TestBed } from "@angular/core/testing";
import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";


describe('CalculatorService', () => {

    let calculator: CalculatorService;
    let loggerSpy: any;

    beforeEach(() => {

        console.log('Calling BeaforeEach')

        loggerSpy = jasmine.createSpyObj('LoggerService', ['log'])

        TestBed.configureTestingModule({
            providers: [
                CalculatorService,
                {provide: LoggerService, useValue: loggerSpy}
            ]
        });
        
        calculator = TestBed.get(CalculatorService);
        //calculator = new CalculatorService(loggerSpy);
    })

    it('Should add two numbers', () => {
        //const logger = new LoggerService() // Removed cause it is best practice to use a fakespyobjct 
        //spyOn(logger, 'log'); Removed because there is a spy used on line 11 by Jasmine
        console.log('Add Test')

        const result = calculator.add(2, 2);

        expect(result).toBe(4, 'Unexpected sum result')

        expect(loggerSpy.log).toHaveBeenCalledTimes(1);

        //pending();
    })


    it('Should subtract two numbers', () => {

        console.log('Subtract Test')

        const result = calculator.subtract(2, 2);

        expect(result).toBe(0, 'Unexpected subtracted result')

        expect(loggerSpy.log).toHaveBeenCalledTimes(1);
        
        //pending();
    })


    it('NON REFACTORED CODE - Should subtract two numbers', () => {

        // const logger = new LoggerService()

        // spyOn(logger, 'log');


        const result = calculator.subtract(2, 2);

        expect(result).toBe(0, 'Unexpected subtracted result')

        expect(loggerSpy.log).toHaveBeenCalledTimes(1);
        
        //pending();
    })
});
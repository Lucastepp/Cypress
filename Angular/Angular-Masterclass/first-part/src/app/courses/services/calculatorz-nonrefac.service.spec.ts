import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";


describe('CalculatorService', () => {

   

    it('Should add two numbers', () => {
        //const logger = new LoggerService() // Removed cause it is best practice to use a fakespyobjct 

        const logger = jasmine.createSpyObj('LoggerService', ['log'])
        //spyOn(logger, 'log'); Removed because there is a spy used on line 11 by Jasmine
        const calculator = new CalculatorService(logger);

        const result = calculator.add(2, 2);

        expect(result).toBe(4, 'Unexpected sum result')

        expect(logger.log).toHaveBeenCalledTimes(1);

        //pending();
    })


    it('Should subtract two numbers', () => {

        const logger = jasmine.createSpyObj('LoggerService', ['log'])
        
        const calculator = new CalculatorService(logger);

        const result = calculator.subtract(2, 2);

        expect(result).toBe(0, 'Unexpected subtracted result')

        expect(logger.log).toHaveBeenCalledTimes(1);
        
        //pending();
    })


    it('NON REFACTORED CODE - Should subtract two numbers', () => {

        const logger = new LoggerService()

        spyOn(logger, 'log');
        
        const calculator = new CalculatorService(logger);

        const result = calculator.subtract(2, 2);

        expect(result).toBe(0, 'Unexpected subtracted result')

        expect(logger.log).toHaveBeenCalledTimes(1);
        
        //pending();
    })
});
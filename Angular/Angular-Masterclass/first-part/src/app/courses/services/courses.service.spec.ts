import { CoursesService } from './courses.service';
import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Courses Services', () => {

    let coursesService: CoursesService;

    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                CoursesService,
            ]
        });

        coursesService = TestBed.get(CoursesService);
    });

    it('Should retrieve all courses', () => {

    })
})
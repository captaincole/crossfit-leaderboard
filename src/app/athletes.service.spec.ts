/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AthletesService } from './athletes.service';

describe('AthletesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AthletesService]
    });
  });

  it('should ...', inject([AthletesService], (service: AthletesService) => {
    expect(service).toBeTruthy();
  }));
});

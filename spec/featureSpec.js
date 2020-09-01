'use strict';

describe('Airport', function() {

  var plane;
  var airport; 

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

it('A plane exists', function() {
  plane.land(airport);
  expect(airport.planes()).toContain(plane);
  });
});
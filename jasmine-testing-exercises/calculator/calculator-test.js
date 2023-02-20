
it('should calculate the monthly rate correctly', function () {
  const values = {amount: 10000, rate: 5.95, years: 5};
  expect(calculateMonthlyPayment(values)).toEqual('193.10');
});


it("should return a result with 2 decimal places", function() {
  const values = {amount: 100000, rate: 10.5, years: 10};
  expect(calculateMonthlyPayment(values)).toEqual('1349.35');
});

/// etc

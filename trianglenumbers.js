function getFactors(n)
{
	var factors = 0;
	for(var count = 1; count <= n; count++)
	{
		if(n % count == 0)
		factors++
	}

	return factors;
}

function getTriangle(n)
{
	var total = 0;
	for(var count = n; count > 0; count--)
	{
		total += count;
	}

	return total;
}

var triangle;
var factors;
for(var i = 9999; i < 50000; i++)
{
	triangle = getTriangle(i);
	factors = getFactors(triangle);

	console.log('i: '+i+'  T: '+triangle+'  F: '+factors);
	if(factors > 500)
	{
		for(var j = 0; j > 0; j++)
		{
			console.log('i: '+i+'  T: '+triangle+'  F: '+factors);
		}
	}
}

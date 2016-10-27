	var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
	var lowToHigh = scores.sort()

	var divForjs = document.getElementById("grades"); 



	var gradeA=[];
	 

	var gradeB=[];

	var gradeC=[];

	var gradeD=[];

	var gradeF=[];


	//function lowest () {
	//	console.log() = lowOut;
	//	return lowGrade 


	//console.log("grades in order", lowToHigh);

	//var arrGrades = lowToHigh.toString()

	//wrap the lowout / hightout in function . 

	//console.log("stringy grade", arrGrades);

	for (i = 0; i < lowToHigh.length; i++) {
			var lowOut = lowToHigh[0]
			var highOut = lowToHigh[lowToHigh.length - 1]
		
			//var highAndLow = lowToHigh.filter(function(grade))
				//return grade.length === 0

		 if (lowToHigh[i] >= 91){
			 gradeA.push(lowToHigh[i])

			}

		else  if (lowToHigh[i] >= 81){
			 gradeB.push(lowToHigh[i])
			 
			} 

		else  if (lowToHigh[i] >= 71){
			 gradeC.push(lowToHigh[i])
			 
			 
			}
		else  if (lowToHigh[i] >= 61){
			gradeD.push(lowToHigh[i])
 
		 	}

		else { 

			 gradeF.push(lowToHigh[i])
		
		} 		

	};

	//console.log (gradeA,gradeB,gradeC,gradeD,gradeF);
	
	divForjs.innerHTML += "<div class = 'grades'> How many A scores?" + gradeA.length + "</div>";
	divForjs.innerHTML += "<div class = 'grades'> How many B scores?" + gradeB.length + "</div>" ;
	divForjs.innerHTML += "<div class = 'grades'> How many C scores?" + gradeC.length + "</div>" ;
	divForjs.innerHTML += "<div class = 'grades'> How many D scores?" + gradeD.length + "</div>" ;
	divForjs.innerHTML += "<div class = 'grades'> How many F scores?" + gradeF.length + "</div>" ;

	divForjs.innerHTML += "<div class = 'grades'> What is the highest grade?" + highOut + "</div>" ;
	divForjs.innerHTML += "<div class = 'grades'> What is the lowest grade?" + lowOut  + "</div>" ;

	
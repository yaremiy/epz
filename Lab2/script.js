const effortMultipliers = [
    {
		id: "ACAP",
		name: "Analyst Capability",
		values: {
			very_low: 1.42,
			low: 1.29,
			average: 1.00,
			high: 0.85,
			very_high: 0.71,
			critical: 0
		}
	},
    {
		id: "AEXP",
		name: "Applications Experience",
		values: {
			very_low: 1.22,
			low: 1.10,
			average: 1.00,
			high: 0.88,
			very_high: 0.81,
			critical: 0
		}
	},
    {
		id: "PCAP",
		name: "Programmer Capability",
		values: {
			very_low: 1.34,
			low: 1.15,
			average: 1.00,
			high: 0.88,
			very_high: 0.76,
			critical: 0
		}
	},
    {
		id: "PCON",
		name: "Personnel Continuity",
		values: {
			very_low: 1.29,
			low: 1.12,
			average: 1.00,
			high: 0.90,
			very_high: 0.81,
			critical: 0
		}
	},
    {
		id: "PEXP",
		name: "Platform Experience",
		values: {
			very_low: 1.19,
			low: 1.09,
			average: 1.00,
			high: 0.91,
			very_high: 0.85,
			critical: 0
		}
	},
    {
		id: "LTEX",
		name: "Language and Tool Experience",
		values: {
			very_low: 1.20,
			low: 1.09,
			average: 1.00,
			high: 0.91,
			very_high: 0.84,
			critical: 0
		}
	},
    {
		id: "RELY",
		name: "Required Software Reliability",
		values: {
			very_low: 0.84,
			low: 0.92,
			average: 1.00,
			high: 1.10,
			very_high: 1.26,
			critical: 0
		}
	},
    {
		id: "DATA",
		name: "Database Size",
		values: {
			very_low: 0,
			low: 0.23,
			average: 1.00,
			high: 1.14,
			very_high: 1.28,
			critical: 0
		}
	},
    {
		id: "CPLX",
		name: "Software Product Complexity",
		values: {
			very_low: 0.73,
			low: 0.87,
			average: 1.00,
			high: 1.17,
			very_high: 1.34,
			critical: 1.74
		}
	},
    {
		id: "RUSE",
		name: "Required Reusability",
		values: {
			very_low: 0,
			low: 0.95,
			average: 1.00,
			high: 1.07,
			very_high: 1.15,
			critical: 1.24
		}
	},
    {
		id: "DOCU",
		name: "Documentation Match to Life-Cycle Needs",
		values: {
			very_low: 0.81,
			low: 0.91,
			average: 1.00,
			high: 1.11,
			very_high: 1.23,
			critical: 0
		}
	},
    {
		id: "TIME",
		name: "Execution Time Constraint",
		values: {
			very_low: 0,
			low: 0,
			average: 1.00,
			high: 1.11,
			very_high: 1.29,
			critical: 1.63
		}
	},
    {
		id: "STOR",
		name: "Main Storage Constraint",
		values: {
			very_low: 0,
			low: 0,
			average: 1.00,
			high: 1.05,
			very_high: 1.17,
			critical: 1.46
		}
	},
    {
		id: "PVOL",
		name: "Platform Volatility",
		values: {
			very_low: 0,
			low: 0.87,
			average: 1.00,
			high: 1.15,
			very_high: 1.30,
			critical: 0
		}
	},
    {
		id: "TOOL",
		name: "Use of Software Tools",
		values: {
			very_low: 1.17,
			low: 1.09,
			average: 1.00,
			high: 0.90,
			very_high: 0.78,
			critical: 0
		}
	},
    {
		id: "SITE",
		name: "Multisite Development",
		values: {
			very_low: 1.22,
			low: 1.09,
			average: 1.00,
			high: 0.93,
			very_high: 0.86,
			critical: 0.80
		}
	},
    {
		id: "SCED",
		name: "Required Development Schedule",
		values: {
			very_low: 1.43,
			low: 1.14,
			average: 1.00,
			high: 1.00,
			very_high: 1.00,
			critical: 0
		}
	}
]


const earlyDesignMultipliers = [
    {
        id: "PERS",
        name: "Personnel Capability",
        values: {
            extra_low: 2.12,
            very_low: 1.62,
            low: 1.16,
            average: 1.00,
            high: 0.83,
            very_high: 0.63,
            critical: 0.50
        }
    },
    {
        id: "PREX",
        name: "Personnel Experience",
        values: {
            extra_low: 1.59,
            very_low: 1.33,
            low: 1.22,
            average: 1.00,
            high: 0.87,
            very_high: 0.74,
            critical: 0.62
        }
    },
    {
        id: "RCPX",
        name: "Product Reliability and Complexity",
        values: {
            extra_low: 0.49,
            very_low: 0.60,
            low: 0.83,
            average: 1.00,
            high: 1.33,
            very_high: 1.91,
            critical: 2.72
        }
    },
    {
        id: "RUSE",
        name: "Developed for Reusability",
        values: {
            extra_low: null,
            very_low: null,
            low: 0.95,
            average: 1.00,
            high: 1.07,
            very_high: 1.15,
            critical: 1.24
        }
    },
    {
        id: "PDIF",
        name: "Platform Difficulty",
        values: {
            extra_low: null,
            very_low: null,
            low: 0.87,
            average: 1.00,
            high: 1.29,
            very_high: 1.81,
            critical: 2.61
        }
    },
    {
        id: "FCIL",
        name: "Facilities",
        values: {
            extra_low: 1.43,
            very_low: 1.30,
            low: 1.10,
            average: 1.00,
            high: 0.87,
            very_high: 0.73,
            critical: 0.62
        }
    },
    {
        id: "SCED",
        name: "Required Development Schedule",
        values: {
            extra_low: null,
            very_low: 1.43,
            low: 1.14,
            average: 1.00,
            high: 1.00,
            very_high: null,
            critical: null
        }
    }
]

const scaleFactors = [
    {
        id: "PREC",
        name: "Preceden -tedness",
        values: {
            very_low: 6.20,
            low: 4.96,
            average: 3.72,
            high: 2.48,
            very_high: 1.24,
            critical: 0
        }
    },
    {
        id: "FLEX",
        name: "Development Flexibility",
        values: {
            very_low: 5.07,
            low: 4.05,
            average: 3.04,
            high: 2.03,
            very_high: 1.01,
            critical: 0
        }
    },
    {
        id: "RESL",
        name: "Architecture / Risk Resolution",
        values: {
            very_low: 7.07,
            low: 5.65,
            average: 4.24,
            high: 2.83,
            very_high: 1.41,
            critical: 0
        }
    },
    {
        id: "TEAM",
        name: "Team Cohesion",
        values: {
            very_low: 5.48,
            low: 4.38,
            average: 3.29,
            high: 2.19,
            very_high: 1.10,
            critical: 0
        }
    },
    {
        id: "PMAT",
        name: "Process Maturity",
        values: {
            very_low: 7.80,
            low: 6.24,
            average: 4.68,
            high: 3.12,
            very_high: 1.56,
            critical: 0
        }
    },
]

const cocomo2Coefficients = {
    early_design: {
        a: 2.94,
        b: 0.91,
        c: 3.67,
        d: 0.28
    },
    post_architecture: {
        a: 2.45,
        b: 0.91,
        c: 3.67,
        d: 0.28
    }
}


// 
// 
// 

function getEAF() {
	let EAF = 1;
	for (let i = 0; i < costDrivers.length; i++) {
		let prop = document.getElementsByName(costDrivers[i].id);
		for (let i = 0; i < prop.length; i++) {
			if (prop[i].checked) EAF *= parseFloat(prop[i].value);
		}
	}
	return EAF;
}

function getTable() {
	let table = "";
	for (let i = 0; i < costDrivers.length; i++) {
		table += "<tr><td>";
		table += costDrivers[i].name;
		table += "</td>";
		for (let val in costDrivers[i].values) {
			table += "<td>";
			if (costDrivers[i].values[val] == 0) {
				table += `<input type='radio' name="${costDrivers[i].id}" value='${costDrivers[i].values[val]}' disabled> n/a`;
			}
			else {
				table += `<input type='radio' name="${costDrivers[i].id}" value='${costDrivers[i].values[val]}'> ${costDrivers[i].values[val]}`;
			}

			table += "</td>";
		}
		table += "</tr>";
	}
	return table;

}
table.innerHTML += getTable();

var x, i, j, l, ll, selElmnt, a, b, c;
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
	selElmnt = x[i].getElementsByTagName("select")[0];
	ll = selElmnt.length;
	a = document.createElement("DIV");
	a.setAttribute("class", "select-selected");
	a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
	x[i].appendChild(a);
	b = document.createElement("DIV");
	b.setAttribute("class", "select-items select-hide");
	for (j = 1; j < ll; j++) {
		c = document.createElement("DIV");
		c.innerHTML = selElmnt.options[j].innerHTML;
		c.addEventListener("click", function (e) {
			var y, i, k, s, h, sl, yl;
			s = this.parentNode.parentNode.getElementsByTagName("select")[0];
			sl = s.length;
			h = this.parentNode.previousSibling;
			for (i = 0; i < sl; i++) {
				if (s.options[i].innerHTML == this.innerHTML) {
					s.selectedIndex = i;
					h.innerHTML = this.innerHTML;
					y = this.parentNode.getElementsByClassName("same-as-selected");
					yl = y.length;
					for (k = 0; k < yl; k++) {
						y[k].removeAttribute("class");
					}
					this.setAttribute("class", "same-as-selected");
					break;
				}
			}
			h.click();
		});
		b.appendChild(c);
	}
	x[i].appendChild(b);
	a.addEventListener("click", function (e) {
		e.stopPropagation();
		closeAllSelect(this);
		this.nextSibling.classList.toggle("select-hide");
		this.classList.toggle("select-arrow-active");
	});
}
function closeAllSelect(elmnt) {
	var x, y, i, xl, yl, arrNo = [];
	x = document.getElementsByClassName("select-items");
	y = document.getElementsByClassName("select-selected");
	xl = x.length;
	yl = y.length;
	for (i = 0; i < yl; i++) {
		if (elmnt == y[i]) {
			arrNo.push(i)
		} else {
			y[i].classList.remove("select-arrow-active");
		}
	}
	for (i = 0; i < xl; i++) {
		if (arrNo.indexOf(i)) {
			x[i].classList.add("select-hide");
		}
	}
}

document.addEventListener("click", closeAllSelect);

function CocomoCalc(a, b, c, d) {
	this.a = a;
	this.b = b;
	this.c = c;
	this.d = d;

	this.effort = 0;
	this.time = 0;
	this.people = 0;
}

function getValues(calc, kloc) {
	let EAF = getEAF();
	calc.effort = (EAF * calc.a * Math.pow(kloc, calc.b)).toFixed(2);
	calc.time = (calc.c * Math.pow(calc.effort, calc.d)).toFixed(2);
	calc.people = Math.round(calc.effort / calc.time);
}

function updateDisplay() {
	var type = document.getElementById("type");

	switch (type.value) {
		case "1":
			var calc = new CocomoCalc(2.4, 1.05, 2.5, 0.38);
			break;
		case "2":
			var calc = new CocomoCalc(3.0, 1.12, 2.5, 0.35);
			break;
		case "3":
			var calc = new CocomoCalc(3.6, 1.20, 2.5, 0.32);
			break;
	}

	klocVal = document.InputArea.KLOCEntry.value;

	getValues(calc, klocVal);
	document.DisplayArea.effort.value = calc.effort;
	document.DisplayArea.duration.value = calc.time;
	document.DisplayArea.developers.value = calc.people;
}

function KLOCValidate() {
	field = document.InputArea.KLOCEntry.value;

	if (parseFloat(field) <= 0 || isNaN(field)) {
		alert("Error! Write the correct number of lines");
		document.InputArea.KLOCEntry.value = "0";
	}
}

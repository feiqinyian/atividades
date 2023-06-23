for(let i=0; i<4; i++){
    console.log(i)
}

var obj = {a:1, b:2, c:3}
for (let prop in obj){
	console.log("obj", prop, "=", obj[prop]);
}

var iteravel = [{nome: "Larissa", admin:false},
                        {nome: "Bruno", admin:false},
                        {nome: "Eduardo", admin:false}]
                       
                for(const valor of iteravel){
                    console.log(valor.nome)
                     }

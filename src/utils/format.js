const subjects = [
    "React",
    "JavaScript",
    "Java",
    "Python",
 ]
 const weekdays = [
     "Domingo",
     "Segunda",
     "Terça",
     "Quarta",
     "Quinta",
     "Sexta",
     "Sábado",
 ]
 
 /*rotas da aplicação, ele localiza as pastas onde estão os html, 
 foi removido o caminhho do index.html por conta dessa rota*/
 //Funcionalidades
 
 
 function getSubject(subjectNumber) {
     const position = +subjectNumber - 1 
     return subjects[position]
 }

 function convertHoursToMinutes(time) {
      const [hour, minutes] = time.split(":")
      return Number((hour * 60) + minutes)


 }

 module.exports = {
     subjects,
     weekdays,
     getSubject,
     convertHoursToMinutes
 }
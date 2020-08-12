const Database = require('./db.js')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    //inserir dados

    proffyValue = {
        name:"Samuel Carlos",
        avatar: "https://avatars2.githubusercontent.com/u/10882051?s=460&u=303e01e5a466bf6839e4b2bf22d8ceda609e730d&v=4",
        whatsapp: "5583999999999",
        bio:"Desenvolvedor de Software pela Unifacisa. Redator, Humorista.",

    }

    classValue = {
        subject: 1,
        cost: "200,00",
        //o proffy id virá pelo banco de dados
    }

    classScheduleValues = [
        //class_id virá peo banco de dados, após cadastramos a class
        {
            weekday: 1,
            time_from: 720,
            time_to: 11220
        },
        {
            weekday: 5,
            time_from: 520,
            time_to: 11220
        }

    ]
    //createProffy
    //await createProffy(db, {proffyValue, classValue, classScheduleValues})

    //consultar os dados inseridos

    //Todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    //consultar as classes de um determinado proffys e trazer juntos os dados
    const selectClassesAndroffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    //console.log(selectClassesAndroffys)

    //o horario que o proffy trabalha é de 8 as 18
    //o horario do time_from (8h) precisa ser menor ou igual ao horario solicitado
    //o time_to precisa ser acima
    const selectClassesSchedule = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "520"
    `)
    console.log(selectClassesSchedule)
})
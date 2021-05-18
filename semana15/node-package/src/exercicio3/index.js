// EXERCÍCIO 3

const task = ["Fazer almoço", "Estudar"];

const newTask = process.argv[2];

if (newTask) {
    task.push(`\n${newTask}`);
    console.log("Tarefa adicionada com sucesso!");
    console.log(`tarefas: [\n${task}\n]`);
} else {
    console.log("Digite uma tarefa!");
}
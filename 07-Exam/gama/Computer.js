class Computer {
    constructor(ramMemory, cpuGHz, hddMemory) {
        this.ramMemory = ramMemory;
        this.cpuGHz = cpuGHz;
        this.hddMemory = hddMemory;

        this.taskManager = [];
        this.installedPrograms = [];
    }

    installAProgram(name, requiredSpace) {
        if (requiredSpace > this.hddMemory) {
            throw new Error('There is not enough space on the hard drive');
        }

        let program = {
            name,
            requiredSpace,
        }

        this.installedPrograms.push(program);
        this.hddMemory -= requiredSpace;
        return program;
    }

    uninstallAProgram(name) {
        this.installedPrograms.forEach((p, i) => {
            if (p.name === name) {
                this.installedPrograms.splice(i, 1);
                this.hddMemory += p.requiredSpace;
                return this.installedPrograms;
            }
        });

        return new Error('Control panel is not responding');
    }

    openAProgram(name) {
        let foundPrograms = this.installedPrograms.filter(p => p.name === name);
        if (foundPrograms.length === 0) {
            throw new Error(`The ${name} is not recognized`);
        }

        let program = foundPrograms[0];
       
        let ramUsage = (program.requiredSpace / this.ramMemory) * 1.5;
        let cpuUsage = ((program.requiredSpace / this.cpuGHz) / 500) * 1.5;

        let programUsage = {
            name,
            ramUsage,
            cpuUsage,
        }

        this.taskManager.forEach(p => {
            if (p.name === programUsage.name) {
                throw new Error(`The ${name} is already open`);
            }
        });

        this.taskManager.push(programUsage);

        let totalRamUsage = this.taskManager.reduce((a, b) => a.ramUsage + b.ramUsage);
        let totalCpuUsage = this.taskManager.reduce((a, b) => a.cpuUsage + b.cpuUsage);

        if (totalRamUsage >= 100 && totalCpuUsage >= 100) {
            return new Error(`${programUsage.name} caused out of memory exception`);
        }

        if (totalRamUsage >= 100) {
            return new Error(`${programUsage.name} caused out of memory exception`);
        } else if (totalCpuUsage >= 100) {
            return new Error(`${programUsage.name} caused out of cpu exception`);
        }

        return programUsage;
    }

    taskManagerView() {
        if (this.taskManager.length === 0) {
            return 'All running smooth so far';
        }

        let result = [];

        this.taskManager.forEach(p => {
            result.push(`Name - ${p.name} | Usage - CPU: ${p.cpuUsage.toFixed(0)}%, RAM: ${p.ramUsage.toFixed(0)}%`);
        });

        return result.join('\n');
    }
}

let computer = new Computer(4096, 7.5, 250000);

computer.installAProgram('Word', 7300);
computer.installAProgram('Excel', 10240);
computer.installAProgram('PowerPoint', 12288);
computer.installAProgram('Solitare', 1500);

computer.openAProgram('Word');
computer.openAProgram('Word');
computer.openAProgram('Excel');
computer.openAProgram('PowerPoint');
computer.openAProgram('Solitare');

console.log(computer.taskManagerView());

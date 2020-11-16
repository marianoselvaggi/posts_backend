/* import { performance } from "perf_hooks";

const measure = (
    target: Object,
    propertyKey: string,
    descriptor: PropertyDescriptor
) => {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        const start = performance.now();
        const result = originalMethod.apply(this, args);
        const end = performance.now();
        console.log(`Execution time: ${end - start} miliseconds`);
        return result;
    }

    return descriptor;
} */

const minimumFuel = (fuel: number) => (
  target: Object,
  propertyKey: string,
  descriptor: PropertyDescriptor
) => {
  const originalMethod = descriptor.value;

  descriptor.value = function(...args: any[]) {
    if ((this as Rocket).fuel > fuel) {
      originalMethod.apply(this,args);
    } else {
      // eslint-disable-next-line no-console
      console.log('Not enough fuel!');
    }
  };

  return descriptor;    
};

const changeValue = (value:number) => (target: Rocket, propertyKey: string) => {
  Object.defineProperty(target,propertyKey,{ writable:true, value });
};

class Rocket {
    @changeValue(100)
    fuel: number;

    constructor(paramFuel: number){
      this.fuel = paramFuel;
    }

    @minimumFuel(60)
    launchToMars() {
      // eslint-disable-next-line no-console
      console.log('Launching rocket to Marths in 3... 2... 1...');
    }

    @minimumFuel(20)
    launchToMoon() {
      // eslint-disable-next-line no-console
      console.log('Launching rocket to Month in 3... 2... 1...');
    }
}

const rocket = new Rocket(50);
rocket.launchToMars();
rocket.launchToMoon();
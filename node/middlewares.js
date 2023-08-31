// middlewares pattern (chain of responsability)

const step1 = (context, next) => {
    context.value1 = 'mid1'
    next()
}

const step2 = (context, next) => {
    context.value2 = 'mid2'
    next()
}

const step3 = context => context.value3 = 'mid3'

const exec = (ctx, ...middlawares) => {
    const execStep = index => {
        middlawares && index < middlawares.length &&
            middlawares[index](ctx, () => execStep(index + 1))
    }
    execStep(0)
}

const ctx = {}

exec(ctx, step2, step1, step3, step1)
console.log(ctx)
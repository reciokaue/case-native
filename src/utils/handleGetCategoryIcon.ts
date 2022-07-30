export const categorys = [ 'Tecnologia', 'Biologia', 'Engenharia', 'Historia', 'Filosofia', 'Matemática']

export default function (name: string){
    switch (name) {
      case 'Tecnologia':
    return 'terminal'
      case 'Biologia':
    return 'feather'
      case 'Historia':
    return 'anchor'
      case 'Matemática':
    return 'hash'
     case 'Filosofia':
    return 'users'
      case 'Engenharia':
    return 'truck'
      default:
        break;
    }
}
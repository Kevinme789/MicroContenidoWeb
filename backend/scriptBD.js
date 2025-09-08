// script-insert-fulltopics-10min.js
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/microcontenidos", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Conectado a MongoDB"))
  .catch((err) => console.error("Error de conexión:", err));

const topicSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  codeExample: String,
  difficulty: {
    type: String,
    enum: ["Fácil", "Medio", "Difícil"],
    default: "Fácil",
  },
  category: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Topic = mongoose.model("Lessons", topicSchema);

// ---------------- Python ----------------
const pythonTopics = [
  {
    title: "Introducción a Python",
    description: `Python es un lenguaje de programación interpretado y de alto nivel, conocido por su sintaxis clara y legible. Es ampliamente utilizado para desarrollo web, análisis de datos, inteligencia artificial y automatización de tareas. La indentación en Python es crucial, ya que define bloques de código. Este tema introduce variables, tipos de datos y operadores básicos.`,
    codeExample: `# Ejemplo de variables en Python\nx = 10\ny = 3.14\nnombre = "Ana"\nprint(nombre, x+y)`,
    difficulty: "Fácil",
    category: "Python",
  },
  {
    title: "Estructuras de Control",
    description: `Python permite controlar el flujo del programa mediante condicionales y bucles. Las estructuras if, elif y else permiten ejecutar bloques según condiciones. Los bucles for y while repiten instrucciones según criterios definidos, y las instrucciones break y continue permiten manipular la ejecución dentro de bucles.`,
    codeExample: `for i in range(5):\n    if i % 2 == 0:\n        print(i, "es par")\n    else:\n        print(i, "es impar")`,
    difficulty: "Fácil",
    category: "Python",
  },
  {
    title: "Funciones y Modularización",
    description: `Las funciones son bloques de código reutilizables que permiten ejecutar tareas específicas. Se definen con 'def' y pueden recibir parámetros y devolver valores. La modularización organiza el código en archivos separados para mejorar la legibilidad y la reutilización.`,
    codeExample: `def saludar(nombre):\n    return "Hola " + nombre\nprint(saludar("Ana"))`,
    difficulty: "Medio",
    category: "Python",
  },
  {
    title: "Listas, Tuplas y Diccionarios",
    description: `Python ofrece estructuras de datos como listas, tuplas y diccionarios. Las listas son mutables, las tuplas inmutables y los diccionarios almacenan pares clave-valor. Estas estructuras permiten organizar y manipular datos de forma eficiente.`,
    codeExample: `frutas = ["manzana", "banana", "cereza"]\nedades = {"Juan":30, "Ana":25}\nprint(frutas[1], edades["Ana"])`,
    difficulty: "Fácil",
    category: "Python",
  },
  {
    title: "Programación Orientada a Objetos",
    description: `La POO en Python permite crear clases y objetos, aplicar herencia, encapsulación y polimorfismo. Esto mejora la organización del código y la reutilización. Los objetos son instancias de clases que contienen atributos y métodos para modelar el comportamiento.`,
    codeExample: `class Persona:\n    def __init__(self, nombre):\n        self.nombre = nombre\n    def saludar(self):\n        print("Hola, soy " + self.nombre)\np = Persona("Ana")\np.saludar()`,
    difficulty: "Difícil",
    category: "Python",
  },
  {
    title: "Manejo de Excepciones",
    description: `El manejo de excepciones en Python permite controlar errores de ejecución sin que el programa se detenga. Se utiliza try, except y finally para capturar y manejar errores específicos.`,
    codeExample: `try:\n    x = int("abc")\nexcept ValueError:\n    print("Entrada inválida")`,
    difficulty: "Medio",
    category: "Python",
  },
  {
    title: "Módulos y Paquetes",
    description: `Python organiza código reutilizable en módulos y paquetes. Un módulo es un archivo .py con funciones y clases, mientras que un paquete es una carpeta que contiene varios módulos. Esto permite estructurar proyectos grandes de manera eficiente.`,
    codeExample: `# archivo util.py\ndef saludar():\n    print("Hola")\n\n# uso\nimport util\nutil.saludar()`,
    difficulty: "Medio",
    category: "Python",
  },
  {
    title: "Archivos y Entrada/Salida",
    description: `Python permite leer y escribir archivos usando open, read, write y with. Esto facilita la manipulación de datos externos y el almacenamiento persistente.`,
    codeExample: `with open("datos.txt", "w") as f:\n    f.write("Hola Mundo")\nwith open("datos.txt", "r") as f:\n    print(f.read())`,
    difficulty: "Medio",
    category: "Python",
  },
  {
    title: "Comprensión de Listas",
    description: `Las list comprehensions permiten crear listas de forma concisa y eficiente aplicando expresiones y filtros. Esto simplifica bucles y condiciones en pocas líneas de código.`,
    codeExample: `cuadrados = [x**2 for x in range(10) if x%2==0]\nprint(cuadrados)`,
    difficulty: "Medio",
    category: "Python",
  },
  {
    title: "Librerías Populares en Python",
    description: `Python cuenta con librerías potentes como NumPy para cálculo numérico, Pandas para análisis de datos, Matplotlib para gráficos y Requests para manejo de APIs. Estas librerías amplían enormemente las capacidades del lenguaje.`,
    codeExample: `import math\nprint(math.sqrt(16))\nimport requests\nr = requests.get("https://api.example.com")\nprint(r.status_code)`,
    difficulty: "Difícil",
    category: "Python",
  },
];

// ---------------- Java ----------------
const javaTopics = [
  {
    title: "Variables y Tipos en Java",
    description: `Java es un lenguaje fuertemente tipado. Los tipos primitivos incluyen int, double, boolean y char. Además, se pueden usar clases y objetos como tipos de datos. Declarar correctamente los tipos previene errores de ejecución y mejora la legibilidad.`,
    codeExample: `int edad = 25;\ndouble altura = 1.75;\nboolean esMayor = true;\nchar inicial = 'A';`,
    difficulty: "Fácil",
    category: "Java",
  },
  {
    title: "POO en Java",
    description: `La programación orientada a objetos en Java permite crear clases, objetos, herencia, polimorfismo y encapsulación. Las clases definen atributos y métodos que los objetos pueden usar. Esto organiza mejor el código y facilita su mantenimiento.`,
    codeExample: `public class Persona {\n    private String nombre;\n    public Persona(String nombre){ this.nombre = nombre; }\n    public void saludar(){ System.out.println("Hola, soy " + nombre); }\n}\nPersona p = new Persona("Ana"); p.saludar();`,
    difficulty: "Medio",
    category: "Java",
  },
  {
    title: "Colecciones en Java",
    description: `Java ofrece estructuras de datos como List, Set y Map para almacenar colecciones de objetos. List permite duplicados y orden, Set elimina duplicados y Map almacena pares clave-valor. Se accede y manipula la información mediante métodos específicos de cada colección.`,
    codeExample: `import java.util.*;\nList<String> nombres = new ArrayList<>();\nnombres.add("Ana");\nnombres.add("Juan");\nSystem.out.println(nombres);`,
    difficulty: "Medio",
    category: "Java",
  },
  {
    title: "Excepciones en Java",
    description: `El manejo de excepciones en Java permite capturar errores de ejecución y manejar situaciones inesperadas sin detener el programa. Se usan try, catch, finally y throws para definir el flujo de control en caso de errores.`,
    codeExample: `try {\n    int x = Integer.parseInt("abc");\n} catch(NumberFormatException e) {\n    System.out.println("Entrada inválida");\n}`,
    difficulty: "Medio",
    category: "Java",
  },
  {
    title: "Interfaces y Clases Abstractas",
    description: `Las interfaces definen métodos que las clases deben implementar. Las clases abstractas pueden contener métodos implementados y no implementados. Ambas herramientas permiten diseñar jerarquías de clases más flexibles y consistentes.`,
    codeExample: `interface Saludo { void saludar(); }\nabstract class Persona { abstract void trabajar(); }`,
    difficulty: "Difícil",
    category: "Java",
  },
  {
    title: "Hilos y Concurrencia",
    description: `Java permite ejecutar múltiples tareas simultáneamente usando hilos (Threads). La concurrencia mejora el rendimiento de aplicaciones que requieren procesamiento paralelo.`,
    codeExample: `class MiHilo extends Thread { public void run(){ System.out.println("Hilo ejecutando"); } }\nnew MiHilo().start();`,
    difficulty: "Difícil",
    category: "Java",
  },
  {
    title: "Java Streams",
    description: `Streams en Java permiten procesar colecciones de forma declarativa, aplicando filtros, mapas y reducciones de manera eficiente.`,
    codeExample: `List<Integer> nums = Arrays.asList(1,2,3,4);\nnums.stream().filter(n->n%2==0).forEach(System.out::println);`,
    difficulty: "Difícil",
    category: "Java",
  },
  {
    title: "Java Generics",
    description: `Los genéricos permiten crear clases, interfaces y métodos parametrizados, lo que garantiza seguridad de tipos y reutilización de código.`,
    codeExample: `List<String> lista = new ArrayList<>();\nlista.add("Hola");`,
    difficulty: "Difícil",
    category: "Java",
  },
  {
    title: "Entrada y Salida en Java",
    description: `Java ofrece clases como Scanner, File y BufferedReader para manejar entrada y salida de datos. Esto permite leer archivos, procesar datos y escribir resultados de manera estructurada.`,
    codeExample: `import java.util.*;\nScanner sc = new Scanner(System.in);\nSystem.out.print("Ingrese nombre: ");\nString nombre = sc.nextLine();`,
    difficulty: "Medio",
    category: "Java",
  },
  {
    title: "Java y JDBC",
    description: `Java Database Connectivity (JDBC) permite conectar aplicaciones Java con bases de datos SQL. Permite ejecutar consultas, actualizar datos y procesar resultados mediante sentencias y conexiones.`,
    codeExample: `// Ejemplo simplificado\nConnection con = DriverManager.getConnection(url, user, pass);\nStatement st = con.createStatement();\nResultSet rs = st.executeQuery("SELECT * FROM usuarios");`,
    difficulty: "Difícil",
    category: "Java",
  },
];

// ---------------- JavaScript ----------------
// Se pueden crear 10 temas similares con descripciones completas
const jsTopics = [
  {
    title: "Introducción a JavaScript",
    description: `JavaScript es un lenguaje interpretado que se ejecuta principalmente en navegadores para crear páginas web interactivas. Permite manipular el DOM, controlar eventos y realizar operaciones asíncronas con fetch y promesas.`,
    codeExample: `let nombre = "Ana";\nconsole.log("Hola " + nombre);`,
    difficulty: "Fácil",
    category: "JavaScript",
  },
  {
    title: "Funciones y Flechas",
    description: `JavaScript permite definir funciones tradicionales y funciones flecha (arrow functions). Las flechas son sintaxis más concisa y mantienen el contexto de 'this'.`,
    codeExample: `const suma = (a,b) => a+b;\nconsole.log(suma(5,3));`,
    difficulty: "Fácil",
    category: "JavaScript",
  },
  {
    title: "Manipulación del DOM",
    description: `El Document Object Model (DOM) representa la estructura HTML de la página. JavaScript permite modificar, agregar y eliminar elementos del DOM para hacer interfaces interactivas.`,
    codeExample: `document.getElementById("titulo").innerText = "Hola Mundo";`,
    difficulty: "Medio",
    category: "JavaScript",
  },
  {
    title: "Eventos en JavaScript",
    description: `JavaScript permite capturar eventos del usuario como clicks, movimientos del mouse o teclas presionadas, y ejecutar funciones en respuesta a ellos.`,
    codeExample: `document.getElementById("btn").addEventListener("click", ()=>{alert("Botón presionado");});`,
    difficulty: "Medio",
    category: "JavaScript",
  },
  {
    title: "Async/Await",
    description: `Permite manejar operaciones asíncronas de manera sencilla, evitando el encadenamiento de promesas y facilitando la lectura del código.`,
    codeExample: `async function fetchData(){\n  const res = await fetch("https://api.example.com");\n  const data = await res.json();\n  console.log(data);\n}`,
    difficulty: "Difícil",
    category: "JavaScript",
  },
  {
    title: "Arrays y Objetos",
    description: `Arrays almacenan listas de valores y objetos almacenan pares clave-valor. Se pueden recorrer, filtrar, mapear y reducir usando métodos nativos de JavaScript.`,
    codeExample: `const nums=[1,2,3];\nconst dobles=nums.map(n=>n*2);\nconsole.log(dobles);`,
    difficulty: "Medio",
    category: "JavaScript",
  },
  {
    title: "JSON y APIs",
    description: `JSON es un formato de datos usado para intercambiar información. JavaScript puede consumir APIs que devuelven JSON y procesar los datos en el navegador.`,
    codeExample: `fetch("https://api.example.com")\n.then(res=>res.json())\n.then(data=>console.log(data));`,
    difficulty: "Difícil",
    category: "JavaScript",
  },
  {
    title: "Clases en JavaScript",
    description: `ES6 introduce la sintaxis de clases en JavaScript para programar orientado a objetos. Se pueden crear constructores, métodos y herencia.`,
    codeExample: `class Persona {\n  constructor(nombre){ this.nombre = nombre; }\n  saludar(){ console.log("Hola " + this.nombre); }\n}\nnew Persona("Ana").saludar();`,
    difficulty: "Medio",
    category: "JavaScript",
  },
  {
    title: "Módulos en JavaScript",
    description: `Los módulos permiten dividir el código en archivos separados y exportar/importar funciones y objetos, mejorando la organización de proyectos grandes.`,
    codeExample: `// utils.js\nexport function saludar(){ console.log("Hola"); }\n// main.js\nimport {saludar} from './utils.js';\nsaludar();`,
    difficulty: "Medio",
    category: "JavaScript",
  },
  {
    title: "Promesas en JavaScript",
    description: `Las promesas representan operaciones asíncronas que pueden completarse o fallar. Se manejan con .then() y .catch() o con async/await.`,
    codeExample: `const prom = new Promise((res, rej)=>{ setTimeout(()=>res("Hecho"),1000); });\nprom.then(msg=>console.log(msg));`,
    difficulty: "Difícil",
    category: "JavaScript",
  },
];

// ---------------- C# ----------------
// 10 temas de C#
const csharpTopics = [
  {
    title: "Introducción a C# y Variables",
    description: `C# es un lenguaje moderno, orientado a objetos y seguro, usado para aplicaciones de escritorio, web y juegos. Sus variables deben declararse con tipo, y el lenguaje permite tipos primitivos y objetos.`,
    codeExample: `int edad = 25;\ndouble altura = 1.75;\nbool esMayor = true;`,
    difficulty: "Fácil",
    category: "C#",
  },
  {
    title: "POO en C#",
    description: `C# permite crear clases, objetos, herencia, encapsulación y polimorfismo. Las propiedades permiten controlar acceso a atributos privados y métodos ejecutan comportamientos.`,
    codeExample: `public class Persona {\n  public string Nombre { get; set; }\n  public void Saludar(){ Console.WriteLine("Hola " + Nombre); }\n}`,
    difficulty: "Medio",
    category: "C#",
  },
  {
    title: "Colecciones y LINQ",
    description: `C# ofrece colecciones como List, Dictionary y LINQ para filtrar, ordenar y transformar datos de forma eficiente.`,
    codeExample: `List<int> nums = new List<int>{1,2,3,4};\nvar pares = nums.Where(n=>n%2==0);\nforeach(var n in pares) Console.WriteLine(n);`,
    difficulty: "Medio",
    category: "C#",
  },
  {
    title: "Eventos y Delegados",
    description: `Delegados son referencias a métodos y los eventos permiten suscribirse a acciones específicas. Esto es clave en interfaces gráficas y programación reactiva.`,
    codeExample: `public delegate void Saludo();\npublic event Saludo OnSaludar;`,
    difficulty: "Difícil",
    category: "C#",
  },
  {
    title: "Manejo de Archivos",
    description: `C# permite leer y escribir archivos usando StreamReader, StreamWriter y File. Esto facilita la manipulación de datos persistentes.`,
    codeExample: `using(StreamWriter sw = new StreamWriter("datos.txt")){\n  sw.WriteLine("Hola Mundo");\n}`,
    difficulty: "Medio",
    category: "C#",
  },
];
// Insertar todos los temas en la base de datos
const allTopics = [
  ...pythonTopics,
  ...javaTopics,
  ...jsTopics,
  ...csharpTopics,
];

Topic.insertMany(allTopics);

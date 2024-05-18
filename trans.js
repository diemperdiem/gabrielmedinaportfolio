i18next.init(
  {
    lng: "en", // If you want to detect the user's language, you can use i18next-browser-languagedetector
    debug: true,
    resources: {
      en: {
        translation: {
          home: "Home",
          about_me: "About Me",
          skills: "Skills",
          more_about_me: "More About Me",
          contact: "Contact",
          greeting: "Hi!, I'm Gabriel",
          greeting_span:
            "I am a versatile software developer specializing in full-stack development, with a keen enthusiasm for design and 3D modeling. My expertise spans C#, .NET Core, ASP.NET, and .NET Frameworks, complemented by proficiency in Angular and React. I am dedicated to adhering to best practices in software architecture and am committe to continuous growth in the technology industry. My goal is to explore effective monetization strategies while pursuing projects that ignite my passion.",
          greeting_button: "Hire Me",
          general_experience: "General Experience",
          general_experience_p:
            "I have over five years of experience in the tech industry, initially starting as a developer. Recently, I've expanded my expertise to include software architecture and aspects of DevOps, specifically in deployment and CI/CD. Currently, I am focused on honing my skills in task planning and requirements gathering, aiming to transition into a management role in the future.",
          skills_h1: "What do I offer?",
          skills_p:
            "With a diverse background as a software developer, I have contributed to a variety of industries including pharmaceuticals, retail point-of-sale systems, insurance, logistics, banking, and cybersecurity. Below, I will detail the wide range of concepts and technologies I have mastered through my extensive and varied experience.",
          backend_exp:
            "I have over five years of experience in C# technologies, including .NET Framework, ASP.NET, .NET Core, Xamarin, and WinUI3. Additionally, I have practical experience with Node.js and Express.js, enhancing my ability to develop versatile and efficient server-side solutions. My programming foundation is further reinforced by a deep understanding of design patterns and data structures, crucial for crafting efficient algorithms and solving complex computational problems. I am adept at implementing various algorithms such as backtracking and depth-first search (DFS), and skilled in managing exceptions and implementing rollback mechanisms to ensure robustness in transactions. My extensive background also includes data mapping, creating user-friendly interfaces, and integrating systems with various providers, enhancing the functionality and interoperability of applications. My knowledge of the C# language is comprehensive, encompassing advanced concepts like threading, memory management, N-Tier architecture, LINQ, and lambda expressions. I also have a solid understanding of heaps, garbage collection, and the application of SOLID principles. Proficient in managing data using an ORM, I am capable of architecting and developing complex software solutions that are efficient, scalable, and maintainable.",
          frontend_exp:
            "I have extensive experience with the Angular and React frameworks, complemented by a solid foundation in HTML, CSS, Sass, JavaScript, and TypeScript. My proficiency extends to understanding core web technologies such as TCP/IP, tokenization, and XMLHTTPRequest, along with advanced tools and techniques including Webpack, transpilers, and API request methods like Axios and Fetch. I have expertise in selecting and managing package managers across multiple sub-frameworks and am skilled in both SQL and NoSQL database technologies. My architectural approach includes meticulous layering of structure to enhance app security and efficiency, incorporating elements like request controllers, DbContexts, and scoped database interactions. I also possess a robust understanding of API processes, having worked extensively with both REST APIs and SOAP requests. This comprehensive skill set enables me to create dynamic and responsive user interfaces that significantly enhance user experience.",
          cloud_exp:
            "I have expertise in utilizing major cloud platforms including AWS, GCP, and Azure, and am proficient in using Bitbucket for version control. My experience extends to crafting scripts for pipelines to automate project processes and enhance continuous integration and deployment (CI/CD) workflows. Additionally, I possess a deep understanding of cloud computing fundamentals, including the implementation of load balancers to manage network traffic and optimize application performance. Currently, I am refining my skills in Platform as a Service (PaaS) environments to optimize deployment strategies. I am also adept at structuring and implementing microservice architectures, allowing the integration of diverse technologies to achieve specific business objectives. This holistic approach to technology integration in cloud environments enables me to design and deploy scalable, resilient, and efficient software solutions.",
          database_exp:
            "I posses a comprehensive understanding of database technologies and have applied this knowledge extensively across various platforms including SQL Server, PostgreSQL, MariaDB, SQLite, SQLED, and MongoDB. My proficiency with these systems encompasses not only routine operations but also complex data management tasks, ensuring optimal performance and reliability. With Entity Framework, particularly in .NET Core environments, I have demonstrated expertise in managing migrations effectively, which involves coordinating database schema changes with application updates seamlessly. Additionally, I am skilled in implementing thread-safe operations and managing concurrency within databases, ensuring data integrity and system stability even under high load conditions. This includes optimizing transactions and locks to prevent data conflicts and ensure seamless access across multiple threads. I also have a strong grasp of data annotations in .NET, which I use to refine and enforce database schema through code, enhancing data integrity and developer productivity. My approach to database planning is meticulous, often favoring the 'code first' methodology where database design is led by model definitions within the application code, allowing for agile development and easier iteration. Currently, I am deepening my expertise in Elasticsearch. While I have practical experience using this powerful search engine, I am dedicated to mastering the setup and configuration processes to fully leverage its capabilities for advanced querying and data indexing in large-scale applications.",
          tools_exp:
            "In my professional career, I have leveraged a diverse array of tools and methodologies to enhance project management, development workflows, and system performance. I have extensive experience with Scrum and Agile methodologies, which I manage through Atlassian's suite, including Jira for tracking issues and Confluence for team collaboration and documentation. These methodologies support iterative development and efficient project management, aligning closely with dynamic project requirements. For software development and testing environments, I utilize Windows Enterprise, which offers robust security and management features, along with Hyper-V for virtualization to simulate different operating conditions and WSL (Windows Subsystem for Linux) to integrate Linux-based tools seamlessly into Windows. Postman is my go-to for API testing, allowing for the development, documentation, and testing of APIs in a straightforward, user-friendly interface. In ensuring code quality and version control, Git is indispensable, providing robust versioning and collaboration capabilities that integrate well with Docker for containerization. Docker simplifies deploying, running, and managing applications in isolated environments, enhancing consistency across development, staging, and production. I also use Ngrok, which exposes local servers behind NATs and firewalls to the public internet over secure tunnels, useful for testing and demonstrations. Moreover, memory profilers are critical in my toolkit for optimizing performance and debugging, helping to identify memory leaks and understand memory usage. This comprehensive toolkit streamlines my development process, ensures high-quality deliverables, and maintains alignment with the latest industry standards.",
          design_exp:
            "In addition to my technical expertise in software development and system architecture, I have also cultivated a strong proficiency in various multimedia and graphic design tools that enhance my creative projects. I am skilled in using Adobe Premiere for video editing, which enables me to produce professional-level video content. My experience with Adobe Photoshop and Adobe Fresco allows me to expertly handle image editing, digital painting, and graphic design tasks. For open-source alternatives, I utilize Krita for digital art and OpenShot for video editing, both of which provide robust features for creative endeavors. Furthermore, I am proficient in Blender, a powerful tool for 3D modeling, animation, and rendering, which allows me to create detailed 3D visualizations and animations. These skills in multimedia production and graphic design significantly enhance the visual impact of my projects, ensuring high-quality outcomes in all aspects of digital creation.",
          external_sources: "External Sources",
          more_about_me_text:
            "Below, you'll find links to other platforms where you can explore more about my work and get a better sense of my professional and creative endeavors",
          question: "Have a Question?",
          question_expand:
            "Do you have an idea? Let's discuss it and see what we can do together.",
          send_email: "Send Email",
          copy_email: "Copy Email",
          bd_title: "Databases",
          tools_title: "Tools",
          design_title: "Design",
          download_cv: "Download CV",
          action_text: "Email Copied!",
          quote_text: "Cotizacion",
        },
      },
      es: {
        translation: {
          home: "Inicio",
          about_me: "Yo",
          skills: "Habilidades",
          more_about_me: "Mas Sobre Mi",
          contact: "Contacto",
          greeting: "Hola!, Soy Gabriel",
          greeting_span:
            "Soy un desarrollador de software versátil especializado en desarrollo full-stack, con un gran entusiasmo por el diseño y el modelado 3D. Mi experiencia abarca C#, .NET Core, ASP.NET y los frameworks de .NET, complementada por mi competencia en Angular y React. Estoy dedicado a seguir las mejores prácticas en arquitectura de software y estoy comprometido con el crecimiento continuo en la industria tecnológica. Mi objetivo es explorar estrategias de monetización efectivas mientras persigo proyectos que enciendan mi pasión.",
          greeting_button: "Contratame",
          general_experience: "Experencia General",
          general_experience_p:
            "Tengo más de cinco años de experiencia en la industria tecnológica, comenzando inicialmente como desarrollador. Recientemente, he ampliado mi experiencia para incluir arquitectura de software y aspectos de DevOps, específicamente en despliegue y CI/CD. Actualmente, estoy enfocado en perfeccionar mis habilidades en planificación de tareas y recopilación de requisitos, con el objetivo de transicionar a un rol de gestión en el futuro.",
          skills_h1: "Que traego a la mesa?",
          skills_p:
            "Con un trasfondo diverso como desarrollador de software, he contribuido en una variedad de industrias incluyendo farmacéutica, sistemas de punto de venta en retail, seguros, logística, banca y ciberseguridad. A continuación, detallaré la amplia gama de conceptos y tecnologías que he dominado a través de mi extensa y variada experiencia.",
          backend_exp:
            "Tengo más de cinco años de experiencia en tecnologías C#, incluyendo .NET Framework, ASP.NET, .NET Core, Xamarin y WinUI3. Adicionalmente, tengo experiencia práctica con Node.js y Express.js, lo que mejora mi capacidad para desarrollar soluciones del lado del servidor versátiles y eficientes. Mi base de programación se refuerza aún más con un profundo entendimiento de patrones de diseño y estructuras de datos, cruciales para elaborar algoritmos eficientes y resolver problemas computacionales complejos. Soy hábil en la implementación de diversos algoritmos como el backtracking y la búsqueda en profundidad (DFS), y competente en la gestión de excepciones e implementación de mecanismos de rollback para asegurar la robustez en las transacciones. Mi amplio trasfondo también incluye mapeo de datos, creación de interfaces amigables para el usuario e integración de sistemas con diversos proveedores, mejorando la funcionalidad e interoperabilidad de las aplicaciones. Mi conocimiento del lenguaje C# es integral, abarcando conceptos avanzados como threading, gestión de memoria, arquitectura N-Tier, LINQ y expresiones lambda. También tengo un sólido entendimiento de montones, recolección de basura y la aplicación de los principios SOLID. Proficiente en la gestión de datos utilizando un ORM, soy capaz de arquitecturar y desarrollar soluciones de software complejas que son eficientes, escalables y mantenibles.",
          frontend_exp:
            "Tengo amplia experiencia con los frameworks Angular y React, complementada por una sólida base en HTML, CSS, Sass, JavaScript y TypeScript. Mi competencia se extiende al entendimiento de tecnologías web fundamentales como TCP/IP, tokenización y XMLHTTPRequest, junto con herramientas y técnicas avanzadas que incluyen Webpack, transpiladores y métodos de solicitud de API como Axios y Fetch. Tengo experiencia en la selección y gestión de gestores de paquetes a través de múltiples sub-frameworks y soy hábil en tecnologías de bases de datos SQL y NoSQL. Mi enfoque arquitectónico incluye una meticulosa estratificación de estructura para mejorar la seguridad y eficiencia de las aplicaciones, incorporando elementos como controladores de solicitudes, DbContexts y interacciones de base de datos delimitadas. También poseo un robusto entendimiento de los procesos de API, habiendo trabajado extensamente tanto con APIs REST como con solicitudes SOAP. Este conjunto de habilidades integral me permite crear interfaces de usuario dinámicas y responsivas que mejoran significativamente la experiencia del usuario.",
          cloud_exp:
            "Poseo experiencia en el uso de las principales plataformas en la nube, incluyendo AWS, GCP y Azure, y soy competente en el uso de Bitbucket para el control de versiones. Mi experiencia se extiende a la creación de scripts para pipelines para automatizar los procesos de proyectos y mejorar los flujos de trabajo de integración y despliegue continuos (CI/CD). Además, tengo un profundo entendimiento de los fundamentos de la computación en la nube, incluyendo la implementación de balanceadores de carga para gestionar el tráfico de red y optimizar el rendimiento de las aplicaciones. Actualmente, estoy refinando mis habilidades en entornos de Plataforma como Servicio (PaaS) para optimizar estrategias de despliegue. También soy hábil en estructurar e implementar arquitecturas de microservicios, permitiendo la integración de diversas tecnologías para lograr objetivos empresariales específicos. Este enfoque holístico de la integración tecnológica en entornos en la nube me permite diseñar y desplegar soluciones de software escalables, resilientes y eficientes.",
          database_exp:
            "Poseo un amplio entendimiento de las tecnologías de bases de datos y he aplicado este conocimiento extensamente en diversas plataformas, incluyendo SQL Server, PostgreSQL, MariaDB, SQLite, SQLED y MongoDB. Mi competencia con estos sistemas abarca no solo operaciones rutinarias sino también tareas complejas de gestión de datos, asegurando un rendimiento óptimo y fiabilidad. Con Entity Framework, especialmente en entornos .NET Core, he demostrado experiencia en gestionar migraciones de manera efectiva, lo que implica coordinar los cambios en el esquema de la base de datos con actualizaciones de la aplicación de manera fluida. Adicionalmente, soy hábil en implementar operaciones seguras para threads y gestionar la concurrencia dentro de las bases de datos, asegurando la integridad de los datos y la estabilidad del sistema incluso bajo condiciones de alta carga. Esto incluye optimizar transacciones y bloqueos para prevenir conflictos de datos y asegurar un acceso sin problemas a través de múltiples hilos. También tengo un sólido conocimiento de las anotaciones de datos en .NET, que utilizo para refinar y hacer cumplir el esquema de la base de datos a través del código, mejorando la integridad de los datos y la productividad de los desarrolladores. Mi enfoque para la planificación de bases de datos es meticuloso, a menudo favoreciendo la metodología 'code first' donde el diseño de la base de datos es liderado por definiciones de modelos dentro del código de la aplicación, permitiendo un desarrollo ágil y una iteración más fácil. Actualmente, estoy profundizando mi experiencia en Elasticsearch. Si bien tengo experiencia práctica usando este potente motor de búsqueda, estoy dedicado a dominar los procesos de configuración y configuración para aprovechar completamente sus capacidades para consultas avanzadas e indexación de datos en aplicaciones a gran escala.",
          tools_exp:
            "En mi carrera profesional, he utilizado una amplia variedad de herramientas y metodologías para mejorar la gestión de proyectos, los flujos de trabajo de desarrollo y el rendimiento del sistema. Tengo una amplia experiencia con las metodologías Scrum y Agile, que gestiono a través de la suite de Atlassian, incluyendo Jira para el seguimiento de problemas y Confluence para la colaboración en equipo y la documentación. Estas metodologías apoyan el desarrollo iterativo y una gestión de proyectos eficiente, alineándose estrechamente con los requisitos dinámicos de los proyectos. Para los entornos de desarrollo y prueba de software, utilizo Windows Enterprise, que ofrece características robustas de seguridad y gestión, junto con Hyper-V para la virtualización para simular diferentes condiciones operativas y WSL (Subsistema de Windows para Linux) para integrar herramientas basadas en Linux de manera fluida en Windows. Postman es mi opción predilecta para las pruebas de API, permitiendo el desarrollo, la documentación y las pruebas de API en una interfaz sencilla y amigable. Para asegurar la calidad del código y el control de versiones, Git es indispensable, proporcionando capacidades robustas de versionado y colaboración que se integran bien con Docker para la contenerización. Docker simplifica el despliegue, la ejecución y la gestión de aplicaciones en entornos aislados, mejorando la consistencia a través del desarrollo, la puesta en escena y la producción. También uso Ngrok, que expone servidores locales detrás de NATs y cortafuegos al internet público a través de túneles seguros, útil para pruebas y demostraciones. Además, los perfiles de memoria son críticos en mi conjunto de herramientas para optimizar el rendimiento y la depuración, ayudando a identificar fugas de memoria y entender el uso de la memoria. Este conjunto de herramientas integral agiliza mi proceso de desarrollo, asegura entregables de alta calidad y mantiene la alineación con los estándares industriales más recientes.",
          design_exp:
            "Además de mi experiencia técnica en desarrollo de software y arquitectura de sistemas, también he cultivado una sólida competencia en diversas herramientas de multimedia y diseño gráfico que realzan mis proyectos creativos. Soy hábil en el uso de Adobe Premiere para la edición de video, lo que me permite producir contenido de video a nivel profesional. Mi experiencia con Adobe Photoshop y Adobe Fresco me permite manejar expertamente la edición de imágenes, la pintura digital y las tareas de diseño gráfico. Para alternativas de código abierto, utilizo Krita para arte digital y OpenShot para edición de video, ambos ofrecen características robustas para emprendimientos creativos. Además, soy competente en Blender, una herramienta poderosa para modelado 3D, animación y renderizado, que me permite crear visualizaciones y animaciones 3D detalladas. Estas habilidades en producción multimedia y diseño gráfico mejoran significativamente el impacto visual de mis proyectos, asegurando resultados de alta calidad en todos los aspectos de la creación digital.",
          external_sources: "Referencias Externas",
          more_about_me_text:
            "A continuación, encontrarás enlaces a otras plataformas donde puedes explorar más sobre mi trabajo y obtener una mejor idea de mis esfuerzos profesionales y creativos.",
          question: "Tienes alguna pregunta?",
          question_expand:
            "¿Tienes una idea? Discutámosla y veamos qué podemos hacer juntos.",
          send_email: "Enviar Correo",
          copy_email: "Copiar Correo",
          bd_title: "Bases de datos",
          tools_title: "Herramientas",
          design_title: "Dieño",
          download_cv: "Descarga CV",
          action_text: "Correo Copiado!",
          quote_text: "Quote",
        },
      },
    },
  },
  function (err, t) {
    // initialized and ready to go!
    updateContent();
  }
);

function updateContent() {
  // Navbar
  document.getElementById("home").innerHTML = i18next.t("home");
  document.getElementById("about_me").innerHTML = i18next.t("about_me");
  document.getElementById("skills").innerHTML = i18next.t("skills");
  document.getElementById("more_about_me").innerHTML =
    i18next.t("more_about_me");
  document.getElementById("contact").innerHTML = i18next.t("contact");

  // Inicio
  document.getElementById("greeting").innerHTML = i18next.t("greeting");
  document.getElementById("greeting_span").innerHTML =
    i18next.t("greeting_span");
  document.getElementById("greeting_button").innerHTML =
    i18next.t("greeting_button");

  // About Me
  document.getElementById("about_me2").innerHTML = i18next.t("about_me");
  document.getElementById("general_experience").innerHTML =
    i18next.t("general_experience");
  document.getElementById("general_experience_p").innerHTML = i18next.t(
    "general_experience_p"
  );

  // Skills
  document.getElementById("skills2").innerHTML = i18next.t("skills");
  document.getElementById("skills_h1").innerHTML = i18next.t("skills_h1");
  document.getElementById("skills_p").innerHTML = i18next.t("skills_p");

  document.getElementById("backend_exp").innerHTML = i18next.t("backend_exp");
  document.getElementById("frontend_exp").innerHTML = i18next.t("frontend_exp");
  document.getElementById("cloud_exp").innerHTML = i18next.t("cloud_exp");
  document.getElementById("database_exp").innerHTML = i18next.t("database_exp");
  document.getElementById("tools_exp").innerHTML = i18next.t("tools_exp");
  document.getElementById("design_exp").innerHTML = i18next.t("design_exp");

  document.getElementById("bd_title").innerHTML = i18next.t("bd_title");
  document.getElementById("tools_title").innerHTML = i18next.t("tools_title");
  document.getElementById("design_title").innerHTML = i18next.t("design_title");

  // More About Me
  document.getElementById("more_about_me_2").innerHTML =
    i18next.t("more_about_me");
  document.getElementById("external_sources").innerHTML =
    i18next.t("external_sources");
  document.getElementById("more_about_me_text").innerHTML =
    i18next.t("more_about_me_text");

  // Contact
  document.getElementById("contact2").innerHTML = i18next.t("contact");
  document.getElementById("question").innerHTML = i18next.t("question");
  document.getElementById("question_expand").innerHTML =
    i18next.t("question_expand");
  document.getElementById("send_email").innerHTML = i18next.t("send_email");
  document.getElementById("copy_email").innerHTML = i18next.t("copy_email");
  document.getElementById("download_cv").innerHTML = i18next.t("download_cv");
  document.getElementById("action_text").innerHTML = i18next.t("action_text");
  document.getElementById("quote_text").innerHTML = i18next.t("quote_text");
}

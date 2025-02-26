function change(language) {
    
    const header = document.getElementById('headerText');
    const description = document.getElementById('descriptionText');
    const home = document.getElementById('homeText');
    const services = document.getElementById('servicesText');
    const contact = document.getElementById('contactText');
    const otherservices = document.getElementById('servicesTextTwo');
    const info = document.getElementById('infoservices');
    const webser = document.getElementById('webdesignText');
    const webdesc=  document.getElementById('webServices');
    const devser = document.getElementById('devText');
    const devdesc = document.getElementById('devServices');
    const shopser = document.getElementById('shopText');
    const shopdesc = document.getElementById('shopServices');
    const grapser = document.getElementById('graphicText'); 
    const grapdes = document.getElementById('graphicServices');
    const facturser = document.getElementById('factureText');
    const facturdes = document.getElementById('factureServices');
    const inventorser = document.getElementById('inventoryText');
    const inventordes = document.getElementById('inventoryServices');
    const callTitle = document.getElementById('callTitle');
    const callText = document.getElementById('callText');
    const callBtn = document.getElementById('callbtn');
    const tecText = document.getElementById('tecText');
    const tectDesc = document.getElementById('tectDesc');
    const years = document.getElementById('years'); 
    const skills = document.getElementById('skills');
    const proyects = document.getElementById('proyects');
    const clients = document.getElementById('clients');
    const Name = document.getElementById('Name');
    const Lastname = document.getElementById('Lastname');
    const Email = document.getElementById('Email');
    const Message = document.getElementById('Message');
    const ContactForm = document.getElementById('ContactForm');
    const ContacServ = document.getElementById('ContacServ');
    const PassOne = document.getElementById('PassOne');
    const PasssTwo = document.getElementById('PasssTwo');
    const PassThree = document.getElementById('PassThree');
    const PassFour = document.getElementById('PassFour');
    const PssSix = document.getElementById('PssSix');
    const PassEight = document.getElementById('PassEight');
    const PassNine = document.getElementById('PassNine');
    const FooterOther = document.getElementById('FooterOther');
    const OtherOne = document.getElementById('OtherOne');
    const OtherTwo = document.getElementById('OtherTwo');
    const OtherThree = document.getElementById('OtherThree');
    const OtherFour = document.getElementById('OtherFour');
    const Links = document.getElementById('Links');
    const LinksOne = document.getElementById('LinksOne');
    const LinksTwo = document.getElementById('LinksTwo');
    const LinksThree = document.getElementById('LinksThree');
    const LinksFour = document.getElementById('LinksFour');
    const More = document.getElementById('More');
    const MoreOne = document.getElementById('MoreOne');
    const MoreTwo = document.getElementById('MoreTwo');
    const MoreThree = document.getElementById('MoreThree');
    const MoreFour = document.getElementById('MoreFour');
    const FooterDown = document.getElementById('FooterDown');


    if (language === 'en') {

        header.textContent = 'About Me';
        description.textContent = 'I am a passionate full stack software developer, with a particular focus on front end development. My goal is always to provide instant and effective solutions that maximize the technological potential of the brands I work with. Throughout my career, I have gained experience in a variety of technologies and tools that allow me to create intuitive and attractive interfaces, optimizing user experience. I am committed to constant innovation and adapting to market trends, ensuring that each project not only meets current standards but also anticipates future needs. My passion for development drives me to closely collaborate with my clients, transforming their visions into impactful digital realities that drive growth and user satisfaction.';
        home.textContent = 'Home';
        services.textContent = 'Services';
        contact.textContent = 'Contact';
        otherservices.textContent = 'Services';
        info.textContent = 'We are here to help make your project a reality! If you have questions or want to learn more about our process, don’t hesitate to send us an email. We would love to talk with you about:';
        webser.textContent = 'Web Design';
        webdesc.textContent = 'Websites, Content Management Systems, Online Stores, Facebook Apps, Frontend, and Backend.';
        devser.textContent = 'Web Development';
        devdesc.textContent = 'We create web solutions for your business: Inventory, Invoicing, Payroll, Accounting.';
        shopser.textContent = 'Ecommerce';
        shopdesc.textContent = 'Online stores with Stripe and PayPal payment integration, ideal for e-commerce.';
        grapser.textContent = 'Graphic Design';
        grapdes.textContent = 'Graphic Design, Corporate Design, Branding, UX/UI Design, and Multimedia Design.';
        facturser.textContent = 'Invoicing';
        facturdes.textContent = 'Create and manage invoices intuitively, optimizing cash flow and administration.';
        inventorser.textContent = 'Inventory';
        inventordes.textContent = 'Manage your inventory efficiently, optimizing product tracking and availability.';
        callTitle.textContent = 'Ready to take your project to the next level?';
        callText.textContent = 'Turn your ideas into digital solutions that make a difference. Let’s talk and make your vision a reality!';
        callBtn.textContent = 'Contact Me';
        tecText.textContent = 'Technologies';
        tectDesc.textContent = 'I have 4 years of experience in software development, starting my career in frontend and learning various technologies and frameworks. My journey as a freelancer and employee has led me to delve into backend development, allowing me to evolve into a full-stack developer role. Today, I am proficient in over 16 technologies and hold certifications that support my ability to take on significant challenges. My focus is on creating comprehensive solutions, adapting to the needs of both the client and the market.';
        years.textContent = 'Years';
        skills.textContent = 'Skills';
        proyects.textContent = 'Proyects';
        clients.textContent = 'Clients';
        Name.textContent = 'First Name';
        Lastname.textContent = 'Last Name';
        Email.textContent = 'Email';
        Message.textContent = 'Message';
        ContactForm.textContent = 'Contact';
        ContacServ.textContent = 'Connect with me, professional approach, teamwork.';
        PassOne.textContent = 'Requirements Gathering';
        PasssTwo.textContent = 'Requirements Analysis';
        PassThree.textContent = 'Software Design';
        PassFour.textContent = 'Development or Coding'; 
        PssSix.textContent = 'Testing'; 
        PassEight.textContent = 'Implementation or Deployment';
        PassNine.textContent = 'Support';
        FooterOther.textContent = 'Other Services';
        OtherOne.textContent = 'Support';
        OtherTwo.textContent = 'Mobile Application Development'; 
        OtherThree.textContent = 'SEO Optimization'; 
        OtherFour.textContent = 'Website Maintenance'; 
        Links.textContent = 'Frequent Links'; 
        LinksOne.textContent = 'Portfolio';
        LinksTwo.textContent = 'Services'; 
        LinksThree.textContent = 'Refund Policy';
        LinksFour.textContent = 'Privacy Policy';
        More.textContent = 'More Products';
        MoreOne.textContent = 'Inventory System';
        MoreTwo.textContent = 'Work Order System';
        MoreThree.textContent = 'Expense and Income System';
        MoreFour.textContent = 'Web Product Catalog';
        FooterDown.textContent = 'All rights reserved';


    } else if (language === 'es') {
        header.textContent = 'Sobre mí';
        description.textContent = 'Soy un desarrollador de software full stack apasionado, con un enfoque particular en el front end. Mi objetivo es siempre ofrecer soluciones instantáneas y efectivas que maximicen el potencial tecnológico de las marcas con las que trabajo. A lo largo de mi carrera, he adquirido experiencia en una variedad de tecnologías y herramientas que me permiten crear interfaces intuitivas y atractivas, optimizando la experiencia del usuario. Estoy comprometido con la innovación constante y la adaptación a las tendencias del mercado, asegurando que cada proyecto no solo cumpla con los estándares actuales, sino que también anticipe las necesidades futuras. Mi pasión por el desarrollo me impulsa a colaborar estrechamente con mis clientes, transformando sus visiones en realidades digitales impactantes que impulsan el crecimiento y la satisfacción del usuario.';
        home.textContent = 'Inicio';
        services.textContent = 'Servicios';
        contact.textContent  = 'Contacto';
        otherservices.textContent = 'Servicios';
        info.textContent = 'Estamos aquí para ayudarte a hacer realidad tu proyecto! Si tienes preguntas o quieres conocer más sobre nuestro proceso, no dudes en enviarnos un e-mail. ¡Nos encantaría hablar contigo sobre:';
        webser.textContent = 'Diseño Web';
        webdesc.textContent = 'Sitios web, Gestores de Contenido, Tiendas en linea, Facebook Apps, FrontEnd y Backend.';
        devser.textContent = 'Desarrollo Web';
        devdesc.textContent = 'Creamos soluciones web para su empresa: Inventario, Facturación, Planillas, Contabilidad.';
        shopser.textContent = 'Ecommerce';
        shopdesc.textContent = 'Tiendas en línea con integración de pagos Stripe y PayPal, ideales para comercio electrónico.';
        grapser.textContent = 'Diseño Gráfico';
        grapdes.textContent = 'Diseño Gráfico, Diseño Corporativo, Branding, Diseño ux/ui y Diseño Multimedia.';
        facturser.textContent = 'Facturación';
        facturdes.textContent = 'Crea y gestiona facturas de forma intuitiva, optimizando el flujo de caja y la administración.';
        inventorser.textContent = 'Inventarios';
        inventordes.textContent = 'Gestiona tu inventario de manera eficiente, optimizando el seguimiento de productos y disponibilidad.';
        callTitle.textContent =  '¿Listo para llevar tu proyecto al siguiente nivel?';
        callText.textContent = 'Convierte tus ideas en soluciones digitales que marcan la diferencia. ¡Hablemos y hagamos realidad tu visión!';
        callBtn.textContent = 'Contactame';
        tecText.textContent = 'Tecnologías';
        tectDesc.textContent = 'Tengo 4 años de experiencia en el desarrollo de software, iniciando mi carrera como frontend y aprendiendo diversas tecnologías y frameworks. Mi trayectoria como freelancer y empleado me ha llevado a profundizar en el desarrollo backend, permitiéndome evolucionar hacia un rol de desarrollador full stack. Hoy, domino más de 16 tecnologías y cuento con certificaciones que respaldan mi capacidad para asumir grandes retos. Mi enfoque se centra en crear soluciones integrales, adaptándome a las necesidades tanto del cliente como del mercado.';
        years.textContent = 'Años';
        skills.textContent = 'Skills';
        proyects.textContent = 'Proyectos';
        clients.textContent = 'Clientes';
        Name.textContent = 'Nombres';
        Lastname.textContent = 'Apellidos';
        Email.textContent = 'Correo electrónico';
        Message.textContent = 'Mensaje';
        ContactForm.textContent = 'Contacto';
        ContacServ.textContent = 'Conéctate conmigo, enfoque profesional, trabajo en equipo.';
        PassOne.textContent = 'Levantamiento de Requerimientos';
        PasssTwo.textContent = 'Análisis de Requerimientos';
        PassThree.textContent = 'Diseño del Software';
        PassFour.textContent = 'Desarrollo o Codificación'; 
        PssSix.textContent = 'Pruebas'; 
        PassEight.textContent = 'Implementación o Despliegue';
        PassNine.textContent = 'Soporte';
        FooterOther.textContent = 'Otros servicios';
        OtherOne.textContent = 'Soporte';
        OtherTwo.textContent = 'Desarrollo de aplicaciones móviles'; 
        OtherThree.textContent = 'Optimización SEO'; 
        OtherFour.textContent = 'Mantenimiento de sitios web'; 
        Links.textContent = 'Enlaces frecuentes'; 
        LinksOne.textContent = 'Portafolio';
        LinksTwo.textContent = 'Servicios'; 
        LinksThree.textContent = 'Política de reembolsos';
        LinksFour.textContent = 'Política de privacidad';
        More.textContent = 'Más productos';
        MoreOne.textContent = 'Sistema de inventario';
        MoreTwo.textContent = 'Sistema de ordenes de trabajo';
        MoreThree.textContent = 'Sistema de gastos e ingresos';
        MoreFour.textContent = 'Catálogo web de productos';
        FooterDown.textContent = 'Todos los derechos reservados'; 
    
    }
}
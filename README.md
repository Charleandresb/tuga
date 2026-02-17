# Aplicación

- Tuga Native Wear, E-commerce.

## Interfaz de usuario

- Esta aplicación es un prototipo con una base sólida de comercio en línea
  que pronto saldrá a producción.

- Concept Store de invierno, tienda de ropa de temporada y accesorios
  tejidos, principalmente gorros y mitones de lana.

- La Home Page muestra en la sección de Hero un deslizador de imágenes
  dinámico que cambia horizontalmente cada cuatro segundos, el temporizador
  se detiene cuando el usuario hace Hover sobre las imágenes. El usuario
  puede cambiar de imagen utilizando los botones flechas en los costados,
  los puntos indicadores correspondientes a la imagen que se está mostrando
  o deslizando a la izquierda o derecha gracias a React Swipeable.

- Un bloque horizontal de tres imágenes muestra productos por categoría.
  Tanto este bloque, el Hero deslizador de imágenes, la barra de navegación
  o el Sidebar en modo móvil utilizan rutas dinámicas que permiten a los
  usuarios navegar por el sitio dirigiéndolos a las vistas correspondientes
  de cada ruta.

- Las imágenes utilizadas se cargan a través de Storage Externo
  con CDN, Cloudinary. Un Helper llamado cloudinaryUrl contiene la URL base
  de las imágenes, con parámetros que insertan en ella un productId (nombre
  identificador de imagen) y un width para especificar la dimensión requerida
  para cada una en las diferentes vistas.

- Los usuarios pueden explorar el catálogo de productos a través de la
  barra de navegación en el modo escritorio o por medio de una barra
  lateral que se despliega en modo móvil.

- El catálogo de productos muestra un grid de cartas, cada una con
  la imagen, el nombre y el precio del producto. Al hacer clic en una
  de la cartas se redirige hacia PDP, la vista con el detalle del producto,
  donde se puede seleccionar talla en el caso de poleras y polerones,
  mientras que gorros y mitones son de talla única. Las tallas, el precio,
  el sku y el stock son las variantes de cada producto ortorgadas por el
  servidor API correspondiente a esta aplicación. Se pueden agregar los
  productos al carrito de compras.

- Cuando el usuario da clic en agregar al carro, automáticamente
  su icono correspondiente a la derecha del encabezado, aumenta la cuenta,
  notificando la cantidad de productos que hay en el carrito de
  compras, al darle clic se muestra el carrito.

- El carrito de compras es una sección donde se enlistan los productos
  que el usuario ha agregado. Cada bloque de producto en la lista es un
  grid compuesto por foto, nombre, talla, precio, cantidad del producto
  y una botonera para aumentar/disminuir la cantidad o eliminar el producto
  de la lista del carrito.

- Cada vez que el usuario aumenta o disminuye la cantidad de uno o
  varios productos, se multiplica el precio por la cantidad dando así
  el precio total de los productos. También aumenta la cantidad en el
  icono notificador. Se pueden eliminar los productos del carrito uno
  por uno o vaciar directamente el carrito.

- El cliente se puede registrar ingresando su nombre, sus apellidos,
  correo electrónico y una contraseña. Una vez registrado exitosamente
  puede iniciar sesión.

- La página renderiza el nombre del usuario que inició sesión a la
  derecha del encabezado.

- El usuario puede ingresar a su perfil haciendo clic en el icono
  de cuenta junto con su nombre. Su perfil muestra su nombre, apellidos
  y su correo electrónico. Pronto el usuario podrá agregar una foto
  de avatar, su información de contacto y dirección. El icono a la
  derecha del bloque permite al usuario cerrar sesión.

- Diseño web 100% responsivo.

- Se está trabajando en interfaces como el perfil, barra de búsqueda,
  un filtrador de productos, ingreso de información de despacho y
  el proceso de pago.

## Funcionalidad

### Enrutamiento:

- Se ha instalado e importado la última versión de react-router-dom
  que proporciona el componente integrado Routes para envolver las rutas,
  comparándolas de manera exclusiva y renderizando sólo una de ellas en
  cada ruta.

- El componente integrado Route se utiliza tantas veces como sea necesario
  para los diferentes componentes que la página renderiza.

- Se creó el componente ProtectedRoute protege la ruta que lleva al
  perfil del usuario. ProtectedRoute hace uso del componente integrado
  Navigate que redirige al usuario a iniciar sesión si no lo ha hecho aún,
  dependiendo de la variable de estado loggedIn. El children de
  ProtectedRoute es Profile.

- Debido a la creación de componentes funcionales, también se utiliza
  el hook useNavigate para dirigir a los usuarios a las diferentes rutas.
  Por ejemplo: Cuando un usuario se registra exitosamente, se abre un
  popup con un mensaje de éxito; al cerrar este popup, se redirige
  al usuario a la ruta login para que inicie sesión.

### Registro e inicio de sesión:

- El componente Register, a través de sus variables de estado y
  manejadores de cambio en los inputs, se encarga de que los usuarios
  puedan registrarse ingresando su nombre, apellidos, correo y contraseña.
  Una vez registrados correctamente los usuarios, pueden iniciar sesión
  en el componente Login, que también a través de las variables de
  estado y manejadores correspondientes permiten el correcto
  inicio de sesión, de lo contrario se otorga un mensaje de error
  en ambos componentes.

- En caso de que el usuario tenga éxito o no al registrarse, el
  componente InfoToolTips tiene un par de childrens que consisten
  en ventanas modales que muestran un mensaje correspondiente.

### Autenticación:

Se ha creado un archivo en el directorio utils llamado auth.js, el
cual contiene las peticiones fetchs al backend para el registro,
el inicio de sesión que guarda en el almacenamiento local el token
proporcionado por el backend en la respuesta exitosa. También hay
un fetch que envía un Bearer token al backend para que lo revise
y de la autorización, de esta manera el usuario mantendrá su sesión
iniciada cuando vuelva a la página web. En caso de que el token sea
inválido se redirige al usuario a la vista de inicio de sesión.

### Validación de formularios:

Validación de formularios a través de la librería React Hook Form.
El hook useForm contiene un registro para los inputs, un manejo
de errores, un controlador de envío y un reseteo de ser necesario.
La función yupResolver maneja las reglas para cada una de las
entradas de los inputs establecidas en sus esquemas correspondientes,
estas reglas se especifican dentro del objeto yup.object. El mensaje
de error se renderiza debajo de los inputs.

## Herramientas y tecnologías:

React, Vite, React router dom, React hook form, Yup, Lucile React,
React Swipeable, Cloudinary, Eslint.

## Dominio:

https://tuganativewear.vercel.app

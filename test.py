import csv

# archivo csv a leer
archivo = 'productos_1000.csv'

# variables a usar
total_precio = 0
total_productos = 0
producto_mayor_stock = None
mayor_stock = -1

# leer el archivo csv
with open(archivo, newline='', encoding='utf-8') as csvfile:
    lector = csv.DictReader(csvfile)
    
    for fila in lector:
        nombre = fila['nombre']
        precio = float(fila['precio'])
        stock = int(fila['stock'])

        # Sumar precios
        total_precio += precio
        total_productos += 1

        #mayor stock
        if stock > mayor_stock:
            mayor_stock = stock
            producto_mayor_stock = nombre

# promedio de precios
promedio_precio = total_precio / total_productos if total_productos > 0 else 0

# Mostrar resultados
print("Productos")
print("----------------------------")
print(f"Promedio de precios: Q{promedio_precio:.2f}")
print(f"Producto con mayor stock: {producto_mayor_stock} ({mayor_stock} unidades)")
print(f"Total de productos: {total_productos}")
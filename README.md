# curso-vue-js-2
Udemy Curso Vue JS 2 

### Util
Para encerrar processo node indesejado:
    
    sudo lsof -nPi -sTCP:LISTEN

    deverá listar:
        ...
        node      7087             nnn   22u  IPv4  88796      0t0  TCP *:8080 (LISTEN)

    então:
        pkill -9 7087
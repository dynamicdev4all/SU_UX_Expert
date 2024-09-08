document.addEventListener("DOMContentLoaded",function(){
    const style = document.createElement('style');
    style.innerHTML =`
        h1{
            font-size : 5em;
            color : red;
            text-align : center;
        }
        
        #gameBoard {
            border-collapse: collapse;
            margin: auto auto;
            background-color: #E1F0DA;
            box-shadow: 100px 100px 250px rgba(0, 255, 0, 0.1);
        }

        #gameBoard td {
            border: 2px solid #333;
            width: 150px;
            height: 150px;
            text-align: center;
            vertical-align: middle;
        }

        .btn {
            width: 100%;
            height: 100%;
            font-size: 2em;
            cursor: pointer;
            background: none;
            border: none;
            outline: none;
            transition: background-color 0.3s;
        }

       :clicked{
            background-color : red;
       }

        .btn:disabled {
            cursor: not-allowed;
        }
    `;
    this.head.appendChild(style)
});
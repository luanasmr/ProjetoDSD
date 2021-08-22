
import styled from 'styled-components';


export const AreaHeader = styled.div`
    height: 60px;
    background-image:linear-gradient(to right, #000000, #008000);
    color:#fff;

    .container{
        padding: 5px 20px;
        display: flex;
        align-itens: center;

    }

    .logo{
        flex:1;

        img{
            position:absolute;
            left:24px;
            top:-28px;
            width:100px;

        }
    }

    nav{

        ul{
            display: flex;
        }

        li{
            list-style: none;
            margin-left: 20px;

            a{
                text-decoration:none;
                color: #fff;

                &:hover{
                    color: #F5BB00;
                }
            }
        }

    }
`;
import styled from "styled-components"

export const StyledDashboard = styled.div`
    display: flex;
    flex-direction: column;

    .title {
        text-align: center;
        background-color: ${({ theme }) => theme.colors.main};
        padding: 1rem;
    }

    .content {
        display: flex;
        gap: 1rem;
        justify-content: center;
        overflow: hidden;
        & > div {
            background-color: ${({ theme }) => theme.colors.background};
            display: flex;
            flex-direction: column;
            gap: 1rem;
            padding: 1rem;

            & > .addBtn {
                color: ${({ theme }) => theme.text.light};
                background-color: ${({ theme }) => theme.colors.main};

                padding: 1rem;
                text-decoration: none;
                font-size: 1.5rem;
                text-align: center;
            }
        }
    }

    .categories {
        display: flex;
        flex-direction: column;

        .allCategories {
            overflow-y: auto;
            &::-webkit-scrollbar {
    -webkit-appearance: none;
}

&::-webkit-scrollbar:vertical {
    width:10px;
}

&::-webkit-scrollbar-button:increment,.contenedor::-webkit-scrollbar-button {
    display: none;
} 

&::-webkit-scrollbar:horizontal {
    height: 10px;
}

&::-webkit-scrollbar-thumb {
    background-color: #797979;
    border-radius: 20px;
    border: 2px solid #f1f2f3;
}

&::-webkit-scrollbar-track {
    border-radius: 10px;  
}
        }
    }

    .products {
        display: flex;
        flex-direction: column;

        .allProducts {
            overflow-y: auto;
            &::-webkit-scrollbar {
    -webkit-appearance: none;
}

&::-webkit-scrollbar:vertical {
    width:10px;
}

&::-webkit-scrollbar-button:increment,.contenedor::-webkit-scrollbar-button {
    display: none;
} 

&::-webkit-scrollbar:horizontal {
    height: 10px;
}

&::-webkit-scrollbar-thumb {
    background-color: #797979;
    border-radius: 20px;
    border: 2px solid #f1f2f3;
}

&::-webkit-scrollbar-track {
    border-radius: 10px;  
}
        }
    }
`

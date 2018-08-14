const JSON_SERVER = 'http://localhost:3000';

function counter(init) {
    var counter = init;
    return () => counter++;
}

const newUId = counter(0);
const newBugId = counter(0);

function formatURLforItemById(table, value) {
    return `${JSON_SERVER}/${table}/${value}`;
    // return `${FIREBASE_REST}/${table}/${value}.json`;
}

function formatURLforItemByField(table, key, value) {
    return `${JSON_SERVER}/${table}?${key}=${value}`;
    // return `${FIREBASE_REST}/${table}.json?orderBy="${key}"&equalTo=${value}`;
}

function formatURLforTable(table) {
        return `${JSON_SERVER}/${table}`;
        // return `${FIREBASE_REST}/${table}.json`;
}

function jsonFetch(url, params) {
    return(
        fetch(url,params).then(response => {
            if(response == 201 || response == 200) {
                return response.json();
            }
            else {
                throw response;
            }
        })
    );
}
function createCRUD(url, data) {
    return jsonFetch(url,
        {headers:{'Content-Type' : 'application/json'}, method:'POST', body: JSON.stringify(data)}
    );
}
function readCRUD(url) {
    return jsonFetch(url,
        {headers:{'Content-Type' : 'application/json'}, method:'GET'}
    );
}
function updateCRUD(url, data) {
    return jsonFetch(url,
        {headers:{'Content-Type' : 'application/json'}, method:'PUT', body: JSON.stringify(data)}
    );
}
function deleteCRUD(url) {
    return jsonFetch(url,
        {headers:{'Content-Type' : 'application/json'}, method:'DELETE'}
    );
}

// CRUD for users

function createUser(data) {

}
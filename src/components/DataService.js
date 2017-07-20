 class XHRService {
    static Send(request, success, error) {
        var xhrRequest = new XMLHttpRequest();
        xhrRequest.onload = (event) => {
            var json = JSON.parse(xhrRequest.responseText);

            if (xhrRequest.status != 200) { 
                if (error)
                    error(new Response(null, false, xhrRequest.status + ': ' + xhrRequest.statusText));
                return;
            }
            
            json.Status == 1
                ? success(new Response(json.Data, true))
                : error(new Response(null, false, json.Message, json.Exception, json.ErrorCode));
        }
        xhrRequest.open(request.Method, request.Url);

        if (request.Headers != null)
            for (let property in request.Headers)
                xhrRequest.setRequestHeader(property, request.Headers[property]);

        xhrRequest.send();

    }
    static SendData(dataRequest, success, error) {
        var xhrRequest = new XMLHttpRequest();
        xhrRequest.onload = (event) => {
            var json = JSON.parse(xhrRequest.responseText);

            if (xhrRequest.status != 200) { 
                if (error)
                    error(new Response(null, false, xhrRequest.status + ': ' + xhrRequest.statusText));
                return;
            }
            
            json.Status == 1
                ? success(new Response(json.Data, true))
                : error(new Response(null, false, json.Message, json.Exception, json.ErrorCode));
        }
        xhrRequest.open(dataRequest.Method, dataRequest.Url);

        if (dataRequest.Headers != null)
            for (let property in dataRequest.Headers)
                xhrRequest.setRequestHeader(property, dataRequest.Headers[property]);
        xhrRequest.send(JSON.stringify(dataRequest.Data));
    }
}

export class Request {
    constructor(method, url, headers) {
        this.Method = method;
        this.Url = url;
        this.Headers = headers;
    }

    Execute(success, error) { XHRService.Send(this, success, error); }
}

export class DataRequest extends Request {
    constructor(data, method, url, headers) {
        super(method, url, headers);

        this.Data = data;
    }

    Execute(success, error) { XHRService.SendData(this, success, error); }
}

export class Response {
    constructor(data, status, message = "", exception = "", errorCode = 0) {
        this.Data = data;
        this.Status = status;
        this.Message = message;
        this.Exception = exception;
        this.ErrorCode = errorCode;
    }
}
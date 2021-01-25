/**
 * abstraction for left side or application adaptors 
 * how other services integrate with us 
 */
export interface AbstractAdaptor {
    /**
     * start the adaptor - adaptors need to implement how they are started - listening on an http port, connecting to an MQ , etc 
     */
    start(): void;

}